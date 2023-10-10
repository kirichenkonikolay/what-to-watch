import React from "react";
import FilmsList from "./FilmsList";
import IFilm from "../types/IFilm";
import films from "../utils/films";

const MoreLikeThis: React.FC = () => {
  const similarFilms: IFilm[] = [];

  for (let i: number = 0; i < 4; i++) {
    similarFilms.push(films[i]);
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similarFilms}></FilmsList>
    </section>
  );
}

export default MoreLikeThis;
