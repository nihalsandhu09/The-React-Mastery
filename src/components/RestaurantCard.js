import { CDN_URL } from "../utilis/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, locality } =
    props?.resData?.info;
  const { deliveryTime } = props?.resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <div className="res-info">
        <h3>{name}</h3>
        <div className="rating-info">
          <h4>{avgRating}⭐</h4>
          <h4> {deliveryTime} minutes</h4>
        </div>
        <h4 className="cuisines">{cuisines.slice(0, 3).join(" , ")}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
