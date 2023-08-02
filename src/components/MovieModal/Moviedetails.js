import React from 'react';
import './Moviedetails.css'; 

const MovieDetailsModal = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2  className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.overview}</p>
        <p className="movie-rating">Average Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
