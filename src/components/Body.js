import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
const Body = () => {
  const [listofRestaurant, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  console.log("Body rendered");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=16&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
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
    <div className="margin bg-gray-900">
      <div className="body bg-gray-900">
        <div className="filter">
          <button className="filter-btn " onClick={filter}>
            {" "}
            Top Rated Restaurants
          </button>
          <div>
            <div className="search">
              <input
                className="searchbox"
                type="text"
                value={searchText}
                onChange={(e) => {
                  setsearchText(e.target.value);
                  console.log(searchText);
                }}
              />
              <button
                className="search-btn"
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

        <div className="restaurant-container flex gap-8">
          {filteredrestaurant.map((restaurant) => {
            return (
              <Link
                className="link"
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant?.info?.id}
              >
                {" "}
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
