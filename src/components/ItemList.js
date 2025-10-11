import { MENU_IMAGE_URL } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartSlice";
const ItemList = ({ items, dummy }) => {
  // console.log(items);
  // console.log(dummy);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="my-8 " key={item.card.info.id}>
            <div className="flex justify-between items-center">
              <div className="w-9/12 ">
                <h1 className="font-bold opacity-80 text-xl ">
                  {" "}
                  {item.card.info.name}
                </h1>
                <p className="font-bold">
                  ₹
                  {item.card.info.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.price / 100}
                </p>
                <p className="text-sm my-2 text-yellow-500 font-bold">
                  ⭐ {item.card.info.ratings.aggregatedRating.rating || 0}
                  <span className=" text-sm">
                    ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </p>
                <h6 className="my-2 opacity-60">
                  {item.card.info.description}
                </h6>
              </div>
              <div className=" relative mb-3">
                <img
                  className="w-42 h-42 rounded-xl object-cover relative"
                  src={MENU_IMAGE_URL + item.card.info.imageId}
                ></img>
                <button
                  className=" px-7 py-2 rounded-lg bg-white text-green-700 font-bold shadow-lg absolute  left-9 -bottom-4.5"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
            <br />
            <br />
            <hr className=" opacity-20"></hr>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
