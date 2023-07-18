import axios from "axios";

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/f2a635b507ad47039f3061cf2643a3b0',
  timeout: 5000,
});
 