import React from "react";

const Popup = ({ selectedMovie, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selectedMovie.Title}
          <span>({selectedMovie.Year})</span>
        </h2>
        <p className="rating">Rating: {selectedMovie.imdbRating}</p>
        <div className="plot">
          <img src={selectedMovie.Poster} alt="poster" />
          <p>{selectedMovie.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
