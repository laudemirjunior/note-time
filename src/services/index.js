import axios from "axios";

const api = axios.create({
  baseURL: "https://note-time-api.herokuapp.com/api",
});

export default api;
