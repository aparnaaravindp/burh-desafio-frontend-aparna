import axios from "axios";

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/523460ffc6e5499d8d0f9ce8af0e7a3d',
  timeout: 5000,
});
 