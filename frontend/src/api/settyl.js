import axios from "axios";

const settyl = axios.create({
  baseURL: process.env.REACT_APP_URL,
  // baseURL: "http://localhost:3000/create",
});

export default settyl;
