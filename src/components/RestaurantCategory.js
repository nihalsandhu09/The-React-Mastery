import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log(data);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-5/12 mx-auto my-4 bg-white shadow-lg p-4">
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>{showItems ? "▲" : "▼"}</span>
      </div>

      {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};
export default RestaurantCategory;
