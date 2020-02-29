import React, { useEffect, useState } from "react";
import accounts from "../services/accounts";
import IndividualMovie from "./IndividualMovie";

/**
 * Get movies from the database
 * map data to individual movie items
 *
 * TODO filter, kuvat ja ulkoasu
 *
 * @returns {*}
 * @constructor
 */
const MovieCatalog = () => {

  const [movie, setMovie] = useState([]);

  //get movies from the database
  useEffect(()=>{
    accounts.getAll().then(result => {setMovie(result)
    })
  },[]);

  console.log(movie);

  const Catalog = ({movies}) =>{
    const mapMovies = () => movies.map(movie => <IndividualMovie key={movie.id} movie={movie}></IndividualMovie>)
      return(
          <div className="grid-container">{mapMovies()}</div>
      )
  };

  return(
      <div>
        <Catalog movies={movie}></Catalog>
      </div>
  )
};
/*
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
 */
export default MovieCatalog
