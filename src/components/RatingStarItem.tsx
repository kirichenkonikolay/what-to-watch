import React from "react";

interface RatingStarProps {
  starCount: number;
}

const RatingStarItem: React.FC = (props: RatingStarProps) => {
  const {starCount} = props;

  return (
    <>
      <input className="rating__input" id={"star-" + starCount} type="radio" name="rating" value={starCount}/>
      <label className="rating__label" htmlFor={"star-" + starCount}>Rating {starCount}</label>
    </>
  );
}

export default RatingStarItem;
