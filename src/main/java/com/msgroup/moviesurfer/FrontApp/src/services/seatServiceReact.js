import axios from "axios";
const seatsUrl = "http://localhost:8080/api/seats";
const reserveSeatUrl = "http://localhost:8080/api/seats/reserve";

/**
 * get all movies from seats table
 * @returns {Promise<T>}
 */
const getAll = () => {
  const request = axios.get(seatsUrl);
  return request.then(response => response.data);
};

//not tested
const getById = ({ movie }) => {
  const request = axios.get(`${seatsUrl}/${movie.movieId}`, movie);
  return request.then(response => response.data);
};

//not tested
const reserveSeat = seatObject => {
  axios.put(`${reserveSeatUrl}/${seatObject.id}`).then(r => console.log(r));
  //return request.then(response => response.data);
};

export default { getAll, getById, reserveSeat };
