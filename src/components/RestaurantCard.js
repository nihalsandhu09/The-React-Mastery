import { CDN_URL } from "../utilis/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, locality } =
    props?.resData?.info;
  const { deliveryTime } = props?.resData?.info?.sla;
  return (
    <div className="res-card  w-96 h-96">
      <img
        className="res-img w-full h-1/2   object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <div className="res-info h-1/2">
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

// Higher order Component

// input  - RestaurantCard => RestauranCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
