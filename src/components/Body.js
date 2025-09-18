import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listofRestaurant, setlistofRestaurants] = useState([]);

  console.log("Body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=16&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    const cards = json?.data?.cards || [];
    let restaurantCard;

    for (let card of cards) {
      if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        restaurantCard = card.card.card.gridElements.infoWithStyle.restaurants;
        break;
      }
    }

    console.log(restaurantCard);
    setlistofRestaurants(restaurantCard);
  };

  // api calls are always inside
  useEffect(() => {
    fetchData();
  }, []);
  // filter to select high rating
  const filter = () => {
    const filtedlist = resList.filter(
      (restaurant) => restaurant.info.avgRating > 4.4
    );
    setlistofRestaurants(filtedlist);
  };

  return (
    <div className="margin">
      <div className="body ">
        <div className="filter">
          <button className="filter-btn " onClick={filter}>
            {" "}
            Top Rated Restaurants
          </button>
        </div>
        <div className="restaurant-container">
          {listofRestaurant.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
