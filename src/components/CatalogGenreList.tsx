import React from "react";
import CatalogGenreItem from "./CatalogGenreItem";

const CatalogGenreList: React.FC = () => {
  const activeGenre = 'All genres';
  const genres: string[] = [
    'All genres',
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids & Family',
    'Romance',
    'Sci-Fi',
    'Thrillers'
  ];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return <CatalogGenreItem title={genre} isActive={genre == activeGenre} />
      })}
    </ul>
  );
}

export default CatalogGenreList;
