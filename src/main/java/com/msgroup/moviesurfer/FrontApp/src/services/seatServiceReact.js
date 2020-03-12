import axios from "axios";
const seatsUrl = "http://localhost:8080/api/seats";
const reserveSeatUrl = "http://localhost:8080/api/seats/reserve";

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
  axios.post(`${reserveSeatUrl}/${seatObject.id}`).then(r => console.log(r));
};

export default { getAll, getById, reserveSeat };
