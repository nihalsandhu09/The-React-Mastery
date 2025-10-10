import Shimmerui from "./Shimmerui";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "dummy data ";
  const resinfo = useRestaurantMenu(resId);
  // console.log(resId);

  const [showIndex, setShowIndex] = useState(0);

  const restaurantMenuInfo = resinfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, cuisines, costForTwo, cloudinaryImageId } =
    restaurantMenuInfo?.card?.card?.info || {};

  const regularCards = resinfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(regularCards);

  const categories = regularCards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);

  // console.log(itemCards);

  return resinfo === null ? (
    <Shimmerui />
  ) : (
    <>
      <div className="text-center">
        <h1 className="font-bold my-2 text-2xl ">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines ? cuisines.join(",") : []}
        </p>
        {/** categpories accrodian  */}
      </div>
      <div>
        {categories?.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() =>
                setShowIndex(showIndex === index ? null : index)
              }
              dummy={dummy}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
