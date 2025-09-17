import RestaurantCard from "./RestaurantCard";
import resList from "../utilis/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRestaurant, setlistofRestaurants] = useState(resList);

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
