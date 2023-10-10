import React from "react";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import FilmsList from "../../components/FilmsList";
import films from "../../utils/films";
import UserBlock from "../../components/UserBlock";

const MyList: React.FC = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
