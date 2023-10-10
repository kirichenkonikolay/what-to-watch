import React from 'react';
import Main from './pages/main-page/Main';
import films from "./utils/films";

const App: React.FC = () => {
  const film = films[0];

  return <Main title={film.title} genre={film.genre} date={film.date} />
}

export default App;
