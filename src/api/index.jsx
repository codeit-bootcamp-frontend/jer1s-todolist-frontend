import axios from "axios";

const instance = axios.create({
  baseURL: "https://taskcomm-api-app.herokuapp.com/api",
  // baseURL: "http://localhost:3000/api",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    post: {
      "Content-Type": "application/json",
    },
  },
});

export default instance;
