import React from "react";
import Footer from "../../components/Footer";
import MoreLikeThis from "../../components/MoreLikeThis";
import Header from "../../components/Header";
import FilmCardNav from "../../components/FilmCardNav";
import FilmReviewList from "../../components/FilmReviewList";
import FilmCardButtons from "../../components/FilmCardButtons";

const FilmReviewsPage: React.FC = () => {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="markup/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <FilmCardButtons />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="markup/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                   height="327"/>
            </div>

            <div className="film-card__desc">
              <FilmCardNav />
              <FilmReviewList />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis />
        <Footer />
      </div>
    </>
  );
}

export default FilmReviewsPage;
