import React, { useEffect, useState } from "react";
import axios from "axios";

const [movie, setMovie] = useState({});

const Movie = props => <div>{props.rows}</div>;

const Mapping = ({ movies }) => {
  const title = [...movies]
    .filter(
      movie =>
        movie.name.toLowerCase().includes(newFilter.toLowerCase()) &&
        newFilter.length > 0
    )
    .map(state => state.title);

  const URL = "movie.com";

  useEffect(() => {
    axios.get(URL).then(response => {
      setMovie(response.data);
    });
  }, [URL]);

  return movies.map(value => {
    return <p key={value.name}>{value.name}</p>;
  });
};

const rows = () => {
  const list = movie.filter(title =>
    title.name.toLowerCase().includes(newFilter.toLowerCase(), 0)
  );
  return <Mapping countries={list} />;
};
