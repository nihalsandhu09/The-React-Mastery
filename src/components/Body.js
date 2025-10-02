import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utilis/useOnlineStatus";
const Body = () => {
  const [listofRestaurant, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  console.log("Body rendered", listofRestaurant);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      const cards = json?.data?.cards || [];
      let restaurantCard;

      for (let card of cards) {
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurantCard =
            card.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }

      console.log(restaurantCard);
      setlistofRestaurants(restaurantCard);
      setfilteredrestaurant(restaurantCard);
    } catch {
      return <h1>Api call did not work</h1>;
    }
  };

  // api calls are always inside
  useEffect(() => {
    fetchData();
  }, []);
  // filter to select high rating
  const filter = () => {
    const filtedlist = filteredrestaurant.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setfilteredrestaurant(filtedlist);
  };

  // conditional rendring rendring on the basis of condition is called conditional rendring
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Looks like you're offline! Please check your internet connection
      </h1>
    );
  return listofRestaurant.length === 0 ? (
    <Shimmerui />
  ) : (
    <div className="margin ">
      <div className="body">
        <div className="filter my-3 flex items-center gap-2.5">
          <button
            className="filter-btn   bg-blue-200  font-bold   py-2 px-1"
            onClick={filter}
          >
            {" "}
            Top Rated Restaurants
          </button>
          <div>
            <div className="search border-2 px-1 py-1  rounded">
              <input
                className="searchbox border-none outline-none"
                type="text"
                value={searchText}
                onChange={(e) => {
                  setsearchText(e.target.value);
                  console.log(searchText);
                }}
              />
              <button
                className="search-btn bg-blue-500 rounded py-0.5 px-1 font-bold  text-blue-50 "
                onClick={() => {
                  // filter the restaurant cards and update the ui
                  const filterrestaurant = listofRestaurant.filter(
                    (restaurant) =>
                      restaurant?.info?.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                  );
                  setfilteredrestaurant(filterrestaurant);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="restaurant-container flex flex-wrap gap-5">
          {filteredrestaurant.map((restaurant) => {
            const promoted =
              restaurant?.info?.promoted ?? restaurant?.info?.avgRating > 4.5;
            return (
              <Link
                className="link"
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant?.info?.id}
              >
                {/* {" "} if restaurant is promoted add 
                
                promted level to it ; */}
                {promoted ? (
                  <RestaurantCardPromoted
                    resData={restaurant}
                    promoted={promoted}
                  />
                ) : (
                  <RestaurantCard resData={restaurant} promoted={promoted} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
