import React from 'react';
import SmallFilmCard from './SmallFilmCard';
import IFilm from "../types/IFilm";

interface FilmListProps {
  films: IFilm[];
}

const FilmsList: React.FC = (props: FilmListProps) => {
  return (
    <div className="catalog__films-list">
      {props.films.map((film) => <SmallFilmCard title={film.title} poster={film.poster} />)}
    </div>
  )
}

export default FilmsList;
