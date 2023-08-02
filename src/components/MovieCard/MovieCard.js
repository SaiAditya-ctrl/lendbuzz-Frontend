import React from 'react';
import { FaHeart } from 'react-icons/fa';
import StarRating from '../StarComponent/StarComponent'; 

const MovieCard = ({ movie, handleToggleFavorite, handleMovieClick }) => {
  return (
    <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
      <div className="movie-card-content">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <FaHeart
          className={`favorite-icon ${movie.video ? 'liked' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); 
            handleToggleFavorite(movie);
          }}
        />
        <div className="movie-details">
          <h2 className="movie-title">{movie.title}</h2>
          <StarRating rating={movie.vote_average} /> 
          <p className="movie-release-date">Release Date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
