// pages/HomePage.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { FavoritesContext } from "../context/FavoritesContext";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { toggleFavorite } = useContext(FavoritesContext);

  const searchMovies = async (query) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
    setMovies(response.data.Search || []);
  };

  return (
    <div>
      <SearchBar onSearch={searchMovies} />
      <MovieList
        movies={movies.map((movie) => ({
          ...movie,
          isFavorite: !!favorites.find((fav) => fav.imdbID === movie.imdbID),
        }))}
        onFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomePage;
