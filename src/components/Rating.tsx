import React from "react";
import RatingStar from "./RatingStar";

const Rating: React.FC = () => {
  const stars = [];

  for (let i: number = 10; i > 0; i--) {
    stars.push(<RatingStar starCount={i} />);
  }

  return (
    <div className="rating">
      <div className="rating__stars">
        {stars}
      </div>
    </div>
  );
}

export default Rating;
