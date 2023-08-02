import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { compareDesc } from 'date-fns';
import Moviedetails from '../MovieModal/Moviedetails'; 
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination'; 
import './MovieList.css'; 

const MovieList = ({ movies, handleToggleFavorite, fav }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;

  const fuse = new Fuse(movies, {
    keys: ['title'],
  });

  const searchFunction = (e) => {
    setSearchText(e.target.value);
  };
 
  const movielist = searchText ? fuse.search(searchText).map((result) => result.item) : movies;
   const filteredMovies = movielist.slice().sort((a, b) => compareDesc(new Date(a.release_date), new Date(b.release_date)));
  
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="nav-header">
        <Link to="/">HOME</Link>
        <Link to="/favourites">FAVORITES</Link>
      </div>
     <h1>ENJOY THE MOVIES</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => searchFunction(e)}
          placeholder="Search Here....."
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="movie-container">
        {fav
          ? currentMovies.map((movie) =>
              movie.video ? (
                <MovieCard
                  key={movie.id}
                  handleMovieClick={handleMovieClick}
                  movie={movie}
                  handleToggleFavorite={handleToggleFavorite}
                />
              ) : null
            )
          : currentMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                handleMovieClick={handleMovieClick}
                movie={movie}
                handleToggleFavorite={handleToggleFavorite}
              />
            ))}
      </div>

      
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredMovies.length / moviesPerPage)}
        onPageChange={onPageChange}
      />

    
      {selectedMovie && (
        <Moviedetails
          handleMovieClick={handleMovieClick}
          movie={selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MovieList;
