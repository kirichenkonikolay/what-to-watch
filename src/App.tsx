import React from 'react';
import MainPage from './pages/main-page/MainPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignInPage from "./pages/sign-in-page/SignInPage";
import MyListPage from "./pages/my-list-page/MyListPage";
import FilmPage from "./pages/film-page/FilmPage";
import AddReviewPage from "./pages/add-review-page/AddReviewPage";
import PlayerPage from "./pages/player-page/PlayerPage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path='login' element={<SignInPage />} />
          <Route path='mylist' element={<MyListPage />}></Route>
          <Route path='films/:id'>
            <Route index element={<FilmPage />} />
            <Route path='review' element={<AddReviewPage />} />
          </Route>
          <Route path='player/:id' element={<PlayerPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
