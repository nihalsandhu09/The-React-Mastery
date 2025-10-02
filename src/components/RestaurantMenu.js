import Shimmerui from "./Shimmerui";
import { MENU_IMAGE_URL } from "../utilis/constants";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);
  console.log(resId);

  const restaurantMenuInfo = resinfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, cuisines, costForTwo, cloudinaryImageId } =
    restaurantMenuInfo?.card?.card?.info || {};

  const regularCards = resinfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards =
    regularCards?.find(
      (c) => c?.card?.card?.itemCards // condition (true if exists)
    )?.card?.card?.itemCards || [];

  const itemCardsTwo =
    resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];
  console.log(itemCards);

  return resinfo === null ? (
    <Shimmerui />
  ) : (
    <>
      <div>
        <h1>{name}</h1>
        <p>{cuisines ? cuisines.join(",") : []}</p>

        {itemCards.map((card) => {
          const { name, price, imageId } = card?.card?.info;

          return (
            <div className="menu-card" key={card?.card?.info.id}>
              <p>{name}</p>
              <p> {price / 100} </p>
              <img src={MENU_IMAGE_URL + imageId}></img>
            </div>
          );
        })}
      </div>
      <div>
        {/* {itemCardsTwo.map((card) => {
          const { name, price, imageId } = card?.card?.info;

          return (
            <div className="menu-card" key={card?.card?.info.id}>
              <p>{name}</p>
              <p> {price / 100} </p>
              <img src={MENU_IMAGE_URL + imageId}></img>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default RestaurantMenu;
