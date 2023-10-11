import React from "react";
import PlayButton from "./PlayButton";
import MyListButton from "./MyListButton";

const FilmCardButtons: React.FC = () => {
  return (
    <div className="film-card__buttons">
      <PlayButton />
      <MyListButton myFilmsCount={9} />
    </div>
  );
}

export default FilmCardButtons;
