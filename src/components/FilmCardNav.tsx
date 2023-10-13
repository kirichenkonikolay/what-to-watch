import React from 'react';

interface FilmCardNavProps {
  tabs: string[];
  activeTab: string;
}

const FilmCardNav: React.FC = (props: FilmCardNavProps) => {
  const {tabs, activeTab} = props;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabs.map((tab) => {
          if (tab === activeTab) {
            return (
              <li key={tab} className="film-nav__item film-nav__item--active">
                <a href="#" className="film-nav__link">{tab}</a>
              </li>
            );
          } else {
            return (
              <li key={tab} className="film-nav__item">
                <a href="#" className="film-nav__link">{tab}</a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default FilmCardNav;
