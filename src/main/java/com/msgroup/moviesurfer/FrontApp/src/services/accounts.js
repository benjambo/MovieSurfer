import axios from "axios";
const baseUrl = "https://moviesurfer-app.herokuapp.com/api/movies";

/**
 * Get all movies from database.
 * @returns {Promise<T>}
 */
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

/**
 * Add movie to database
 * @param newObject
 * @returns {Promise<T>}
 */
const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};

/**
 * Update/replace movie.
 * @param newObject
 * @returns {Promise<T>}
 */
const replace = newObject => {
  const request = axios.post(`${baseUrl}/${newObject.id}`, newObject);
  return request.then(response => response.data);
};

/**
 * delete movie
 * @param id
 * @returns {Promise<T>}
 */
const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
};

export default { getAll, create, replace, remove };
