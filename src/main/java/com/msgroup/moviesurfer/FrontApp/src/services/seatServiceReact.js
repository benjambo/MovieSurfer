import axios from "axios";
import * as lang from "../services/languageService";
//const seatsUrl = "http://localhost:8080/api/seats";
//const seatsUrl = "https://moviesurfer-app.herokuapp.com/api/seats";
const seatsUrl = "/api/seats";

//  Send the chosen language as a parameter (lang.getLanguage()) with http request
const reserveSeatUrl = "/api/seats/reserve?language=" + lang.getLanguage();

/**
 * get all seats from seats table
 * @returns {Promise<T>}
 */
const getAll = () => {
  const request = axios.get(seatsUrl);
  return request.then(response => response.data);
};

/**
 * this method has not been tested yet.
 * @param movie
 * @returns {Promise<T>}
 */
const getById = ({ movie }) => {
  const request = axios.get(`${seatsUrl}/${movie.movieId}`, movie);
  return request.then(response => response.data);
};

/**
 * reserve seat
 * @param seatObject
 */
const reserveSeat = seatObject => {
  axios.post(`${reserveSeatUrl}`, seatObject).then(r => console.log(r));
};

export default { getAll, getById, reserveSeat };
