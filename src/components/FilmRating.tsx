import React from "react";

interface FilmRatingProps {
  score: string;
  level: string;
  count: number;
}

const FilmRating: React.FC = (props: FilmRatingProps) => {
  const {score, level, count} = props;

  return (
    <div className="film-rating">
      <div className="film-rating__score">{score}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{level}</span>
        <span className="film-rating__count">{count} ratings</span>
      </p>
    </div>
  );
}

export default FilmRating;
