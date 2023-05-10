import axios from "axios";
import { BASE_URL } from "utils/constants";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(`getUsers error: ${error}`);
  }
};

export const addUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(`getUsers error: ${error}`);
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error(`getPosts error: ${error}`);
  }
};
