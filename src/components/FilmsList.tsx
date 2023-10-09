import React from 'react';
import films from '../utils/films';
import FilmCard from './FilmCard';

const FilmsList: React.FC = () => {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard title={film.title} poster={film.poster} />)}
    </div>
  )
}

export default FilmsList;
