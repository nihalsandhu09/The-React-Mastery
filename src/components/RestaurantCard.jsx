import { CDN_URL } from "../utilis/constants";
const RestaurantCard = (props) => {
  console.log(props);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props?.resData?.info;
  const { deliveryTime } = props?.resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL
           +
          cloudinaryImageId
        }
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>

      <h4>{avgRating}*</h4>
      <h4> {deliveryTime} minutes</h4>
    </div>
  );
};
  
export default RestaurantCard;