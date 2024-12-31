// pages/FavoritesPage.jsx
import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Your Favorites</h1>
      <MovieList movies={favorites} onFavorite={toggleFavorite} />
    </div>
  );
};

export default FavoritesPage;
