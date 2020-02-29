import React, { useEffect, useState } from "react";
import accounts from "../services/accounts";
import IndividualMovie from "./IndividualMovie";
import newFilter from "./NavigationBar";

/**
 * Get movies from the database
 * map data to individual movie items
 *
 * TODO filter, kuvat ja ulkoasu
 *
 * @returns {*}
 * @constructor
 */

const Movie = props => <div>{props.rows}</div>;

const MovieCatalog = () => {
  const [movie, setMovie] = useState([]);

  //get movies from the database
  useEffect(() => {
    accounts.getAll().then(result => {
      setMovie(result);
    });
  }, []);

  console.log(movie);

  const rows = () =>
    movie
      .filter(movieName =>
        movieName.title.toLowerCase().includes(newFilter.toLowerCase())
      )
      .map(individualMovie => {
        return (
          <p key={individualMovie.id}>
            {individualMovie.title} {individualMovie.genre}
          </p>
        );
      });

  const Catalog = ({ movies }) => {
    const mapMovies = () =>
      movies.map(movie => <IndividualMovie key={movie.id} movie={movie} />);
    return <div className="grid-container">{mapMovies()}</div>;
  };

  return (
    <div>
      <Catalog movies={movie} />
      <Movie movies={rows()} />
    </div>
  );
};
export default MovieCatalog;
