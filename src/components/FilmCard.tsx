import React from 'react';
import Header from './Header';
import FilmCardButtons from './FilmCardButtons';

interface FilmCardProps {
  title: string;
  genre: string;
  date: string;
}

const FilmCard: React.FC = (props: FilmCardProps) => {
  const {title, genre, date} = props;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="markup/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="markup/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{date}</span>
            </p>

            <FilmCardButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmCard;
