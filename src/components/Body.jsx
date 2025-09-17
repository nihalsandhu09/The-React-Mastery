import RestaurantCard from "./RestaurantCard";
import resList from "../utilis/mockData";
import { useState } from "react";

const Body = () => {

  const [Value,setfilter] = useState(resList);
  const filter = ()=>{
 const filterres = resList.filter((restaurant)=> restaurant.info.avgRating>4.4)
 setfilter(filterres)
  }
  return (
    <div className="margin">
      <div className="body ">
        <div className="filter">

          
          <button className="filter-btn " onClick={filter}> Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
          {Value.map((restaurant) => {
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
