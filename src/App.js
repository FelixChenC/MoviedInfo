import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import axios from "axios";

function App() {
  const [movieData, setMovieData] = useState({
    searchQuery: "",
    results: [],
    selectedMovie: {},
  });

  const apiUrl = "http://www.omdbapi.com/?apikey=52bad06f";

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + movieData.searchQuery).then(({ data }) => {
        let result = data.Search;

        setMovieData((prevState) => {
          return { ...prevState, results: result };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setMovieData((prevState) => {
      return { ...prevState, searchQuery: s };
    });
  };

  const openPopup = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      setMovieData((prevState) => {
        return { ...prevState, selectedMovie: result };
      });
    });
  };

  const closePopup = () => {
    setMovieData((prevState) => {
      return { ...prevState, selectedMovie: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handlerInput={handleInput} searchHandler={searchHandler} />
        <Results results={movieData.results} openPopup={openPopup} />

        {typeof movieData.selectedMovie.Title != "undefined" ? (
          <Popup
            selectedMovie={movieData.selectedMovie}
            closePopup={closePopup}
          />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
