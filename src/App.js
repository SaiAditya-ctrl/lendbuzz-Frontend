import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MovieList from './components/MovieList/MovieList';
import Errorhandler from './components/ErrorHandler/Errorhandler';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const API_URL = 'http://localhost:6006/api/movies';
        const response = await axios.get(API_URL);
        const data = response.data;
        console.log("dd", data);
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies();
  }, []);

  const handleToggleFavorite = (movie) => {
   
    const API_URL = `http://localhost:6006/api/movies/+${movie.id}`;
    axios.put(API_URL).then((res)=>{
      setMovies(res.data)
    })
    .catch((err)=>console.log(err))
  };

  return (
    <div className='App' style={{ backgroundColor: "black" }}>
   {movies.length>0 ?   <Router>
        <Routes>
          <Route exact path="/"
           
           element= {<MovieList movies={movies} fav={false} handleToggleFavorite={handleToggleFavorite} />
  }>
          </Route>
          <Route exact path="/favourites"
           
           element= {<MovieList movies={movies} fav={true} handleToggleFavorite={handleToggleFavorite} />
  }>
          </Route>
        
        </Routes>
        </Router>:
        <Router>
                   <Routes>
         <Route exact path="/error"
          
          element= {<Errorhandler  />
 }>
        
        </Route>
        </Routes>
        </Router>}

   
    </div>
  );
}

export default App;
