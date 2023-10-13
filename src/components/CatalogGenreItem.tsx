import React from 'react';

interface CatalogGenreItemProps {
  title: string;
  isActive: boolean;
}

const CatalogGenreItem: React.FC = (props: CatalogGenreItemProps) => {
  const {title, isActive = false} = props;

  if (isActive) {
    return (
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">{title}</a>
      </li>
    );
  }

  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{title}</a>
    </li>
  );
};

export default CatalogGenreItem;
