import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utilis/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handlerClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemover = () => {
    dispatch(removeItem());
  };
  const total =
    cartItems?.reduce(
      (acc, item) =>
        acc + (item?.card?.info?.price || item?.card?.info?.defaultPrice),
      0
    ) / 100 || 0;

  console.log(total);
  return (
    <div className=" ">
      <h1 className="text-2xl font-bold w-6/12 m-auto ">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
        {cartItems.length === 0 && <h1>Cart is Empty Add items to Cart</h1>}
        <button
          className="p-2 m-2  font-bold bg-black text-white rounded-lg"
          onClick={handlerClearCart}
        >
          Clear Cart
        </button>
        <button
          className="p-2 m-2 font-bold bg-black text-white rounded-lg"
          onClick={handleRemover}
        >
          Remove
        </button>

        <div className="flex justify-between border p-5">
          <h1 className="font-bold text-2xl">Total: </h1>
          <p className="font-bold text-2xl">{total}</p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
