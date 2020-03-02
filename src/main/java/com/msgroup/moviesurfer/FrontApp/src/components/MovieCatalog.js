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
  useEffect(() => {
    accounts.getAll().then(result => {
      setMovie(result);
    });
  }, []);

  console.log(movie);

  //.filter(movieName => movieName.title.includes(newFilter))

  const Catalog = ({ movies }) => {
    const mapMovies = () =>
      movies.map(movie => <IndividualMovie key={movie.id} movie={movie} />);
    return <div className="grid-container">{mapMovies()}</div>;
  };

  return (
    <div>
      <Catalog movies={movie} />
    </div>
  );
};
export default MovieCatalog;
