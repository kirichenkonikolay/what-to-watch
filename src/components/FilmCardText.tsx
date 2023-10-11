import React from "react";

interface FilmCardTextProps {
  text: string;
  director: string;
  starring: string[];
}

const FilmCardText: React.FC = (props: FilmCardTextProps) => {
  const {text, director, starring} = props;

  const starringStr = starring.join(', ');

  return (
    <div className="film-card__text">
      <p>{text}</p>
      <p className="film-card__director"><strong>Director: {director}</strong></p>
      <p className="film-card__starring"><strong>Starring: {starringStr} and other</strong></p>
    </div>
  );
}

export default FilmCardText;
