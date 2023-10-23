import React from 'react';
import FilmList from '../../components/FilmList';
import Footer from '../../components/Footer';
import films from '../../utils/films';
import CatalogGenreList from '../../components/CatalogGenreList';
import FilmCard from '../../components/FilmCard';

const MainPage: React.FC = () => {
  const film = films[0];
  const title = film.title;
  const genre = film.genre;
  const date = film.date;

  return (
    <>
      <FilmCard title={title} genre={genre} date={date} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenreList />

          <FilmList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MainPage;

