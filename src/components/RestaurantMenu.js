import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=426776&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResInfo(json.data);
    console.log(resinfo);
  };
  return resinfo === null ? (
    <Shimmerui />
  ) : (
    <div className="">
      <h1>{resinfo?.cards?.[2]?.card?.card?.info?.name}</h1>
      <p>{resinfo?.cards?.[2]?.card?.card?.info?.cusines}</p>
      <ul>
        <li> {resinfo?.cards?.[2]?.card?.card?.info?.costForTwo / 100} RS </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
