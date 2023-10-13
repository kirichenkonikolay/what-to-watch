import React from 'react';

interface RatingStarItemProps {
  starCount: number;
}

const RatingStarItem: React.FC = (props: RatingStarItemProps) => {
  const {starCount} = props;

  return (
    <>
      <input className="rating__input" id={`star-${ starCount}`} type="radio" name="rating" value={starCount}/>
      <label className="rating__label" htmlFor={`star-${ starCount}`}>Rating {starCount}</label>
    </>
  );
};

export default RatingStarItem;
