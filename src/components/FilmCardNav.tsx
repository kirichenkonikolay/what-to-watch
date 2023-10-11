import React from "react";

interface FilmCardNavProps {
  tabs: string[];
}

const FilmCardNav: React.FC = () => {
  const tabs: string[] = ['Overview', 'Details', 'Reviews'];
  const activeTab: string = 'Overview';

  // TODO: придумать что-то с активной вкладкой

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <a href="#" className="film-nav__link">Overview</a>
        </li>
        <li className="film-nav__item">
          <a href="#" className="film-nav__link">Details</a>
        </li>
        <li className="film-nav__item">
          <a href="#" className="film-nav__link">Reviews</a>
        </li>
      </ul>
    </nav>
  );
}

export default FilmCardNav;
