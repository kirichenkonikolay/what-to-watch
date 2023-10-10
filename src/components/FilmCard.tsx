import React from 'react';

interface FilmCardProps {
  title: string;
  poster: string;
}

const FilmCard: React.FC = (props: FilmCardProps) => {
  const {title, poster} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="">{title}</a>
      </h3>
    </article>
  )
}

export default FilmCard;
