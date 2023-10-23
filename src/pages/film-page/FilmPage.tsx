import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MoreLikeThis from '../../components/MoreLikeThis';
import FilmCardButtons from '../../components/FilmCardButtons';
import FilmRating from '../../components/FilmRating';
import FilmCardText from '../../components/FilmCardText';
import FilmCardNav from '../../components/FilmCardNav';
import {useParams} from 'react-router-dom';

const FilmPage: React.FC = () => {
  const params = useParams();
  console.log(params.id);

  const text = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.

  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
  the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
  mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
  murder.`;

  const director = 'Wes Anderson';
  const starring: string[] = ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'];

  const tabs: string[] = ['Overview', 'Details', 'Reviews'];
  const activeTab = 'Overview';

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
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <FilmCardNav tabs={tabs} activeTab={activeTab} />
              <FilmRating score={'8,9'} level={'Very good'} count={240} />
              <FilmCardText text={text} director={director} starring={starring} />
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
};

export default FilmPage;
