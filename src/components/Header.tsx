import React from 'react';
import Logo from './Logo';
import UserBlock from './UserBlock';

const Header: React.FC = () => (
  <header className="page-header film-card__head">
    <Logo />
    <UserBlock />
  </header>
);

export default Header;
