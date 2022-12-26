import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { MovieSearchContext } from "../../../../../context";

import { API_KEY } from "../../../../../data";

import { GenresItem } from "./GenresItem";

import "./styles.css";

export const GenresBody = () => {
  const { setSearchQueries } = useContext(MovieSearchContext);

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState(new Set());

  const changeGenres = (_id) => {
    // add or remove ganres
    setSelectedGenres((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(_id)) {
        newSet.delete(_id);
      } else {
        newSet.add(_id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    //send genres to query
    const genresForSend = Array.from(selectedGenres);
    let genresQuery = "";
    genresForSend.forEach((query, index) => {
      if (index === 0) {
        genresQuery += `${query}`;
      } else {
        genresQuery += `%2C${query}`;
      }
    });

    if (genresForSend.length) {
      setSearchQueries((prev) => [
        ...prev,
        {
          qeuryRoute: "with_genres",
          queryValue: genresQuery,
        },
      ]);
    }
  }, [selectedGenres, setSearchQueries]);

  useEffect(() => {
    // get genres
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres));
  }, []);

  return (
    <div className="sort-panel-body">
      <h3>Genres</h3>
      <div className="genres-items">
        {genres.map((btn) => (
          <GenresItem genre={btn} key={btn.id} onCallback={changeGenres} />
        ))}
      </div>
    </div>
  );
};
