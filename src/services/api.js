import axios from "axios";

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/a5aebd7791d346718a1030651ce5878e',
  timeout: 5000,
});
 