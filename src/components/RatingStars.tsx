import React from "react";
import RatingStarItem from "./RatingStarItem";

const RatingStars: React.FC = () => {
  const stars = [];

  for (let i: number = 10; i > 0; i--) {
    stars.push(<RatingStarItem starCount={i} />);
  }

  return (
    <div className="rating">
      <div className="rating__stars">
        {stars}
      </div>
    </div>
  );
}

export default RatingStars;
