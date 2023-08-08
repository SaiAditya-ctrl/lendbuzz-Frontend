import React, { useEffect, useState } from "react";

import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieList from "./components/MovieList/MovieList";
import Errorhandler from "./components/ErrorHandler/Errorhandler";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const baseUrl = "http://localhost:6010/api"
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const API_URL = `${baseUrl}/movies`;
        const response = await axios.get(API_URL);
        const data = response.data;
        console.log("dd", data);
        setMovies(data);
        navigate("/");
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/error");
      }
    };
    fetchMovies();
  }, []);

  const handleToggleFavorite = (movie) => {
    const API_URL = `${baseUrl}/movies/+${movie.id}`;
    axios
      .put(API_URL)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  };

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MovieList
              movies={movies}
              fav={false}
              handleToggleFavorite={handleToggleFavorite}
            />
          }
        ></Route>
        <Route
          exact
          path="/favourites"
          element={
            <MovieList
              movies={movies}
              fav={true}
              handleToggleFavorite={handleToggleFavorite}
            />
          }
        ></Route>

        <Route exact path="/error" element={<Errorhandler />}></Route>
      </Routes>
    </div>
  );
}

export default App;
