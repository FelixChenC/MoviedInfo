import React from "react";

function Search({ handlerInput, searchHandler }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={handlerInput}
        onKeyPress={searchHandler}
      />
    </section>
  );
}

export default Search;
