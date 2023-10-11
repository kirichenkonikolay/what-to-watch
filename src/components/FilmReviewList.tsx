import React from "react";
import IReview from "../types/IReview";
import Review from "./Review";

interface FilmReviewListProps {
  reviews: IReview[];
}

const FilmReviewList: React.FC = (props: FilmReviewListProps) => {
  const {reviews} = props;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <Review
            text={review.text}
            author={review.author}
            date={review.date}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default FilmReviewList;
