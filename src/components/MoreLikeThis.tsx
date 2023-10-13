import React from 'react';
import FilmList from './FilmList';
import IFilm from '../types/IFilm';
import films from '../utils/films';

const MoreLikeThis: React.FC = () => {
  const similarFilms: IFilm[] = [];

  for (let i = 0; i < 4; i++) {
    similarFilms.push(films[i]);
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmList films={similarFilms}></FilmList>
    </section>
  );
};

export default MoreLikeThis;
