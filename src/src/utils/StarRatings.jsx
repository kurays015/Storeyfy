import { IoMdStarHalf, IoMdStarOutline, IoMdStar } from "react-icons/io";

export function StarRatings(rating) {
  if (rating > 3.9 && rating < 4.2) {
    return (
      <div className="stars-rating">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStarOutline />
      </div>
    );
  } else if (rating > 4.2 && rating < 4.5) {
    return (
      <div className="stars-rating">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStarHalf />
      </div>
    );
  } else if (rating > 4.5 && rating < 5) {
    return (
      <div className="stars-rating">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </div>
    );
  }
}
