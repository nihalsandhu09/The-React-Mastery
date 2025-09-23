import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui";
import { MENU_IMAGE_URL } from "../utilis/constants";
import { MENU_API_URL } from "../utilis/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  const restaurantMenuInfo = resinfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, cuisines, costForTwo, cloudinaryImageId } =
    restaurantMenuInfo?.card?.card?.info || {};

  const itemCards =
    resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];
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
        <p>{cuisines.join(",")}</p>

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
        {itemCardsTwo.map((card) => {
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
    </>
  );
};

export default RestaurantMenu;
