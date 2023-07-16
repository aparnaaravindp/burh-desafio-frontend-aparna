import axios from "axios";

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/d0063d2b68d74862a75fc3243c9314c9',
  timeout: 5000,
});
 