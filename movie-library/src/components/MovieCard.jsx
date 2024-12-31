// components/MovieCard.jsx
import React from "react";

const MovieCard = ({ movie, onFavorite }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => onFavorite(movie)}>
        {movie.isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default MovieCard;

