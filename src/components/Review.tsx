import React from "react";

interface ReviewProps {
  text: string;
  author: string;
  date: string;
  rating: string;
}

const Review: React.FC = (props: ReviewProps) => {
  const {text, author, date, rating} = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">date</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
