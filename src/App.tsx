import React from 'react';
import MainPage from './pages/main-page/MainPage';
import films from './utils/films';

const App: React.FC = () => {
  const film = films[0];

  return <MainPage title={film.title} genre={film.genre} date={film.date} />;
};

export default App;
