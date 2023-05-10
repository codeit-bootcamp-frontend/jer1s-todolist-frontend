import api from "api";

export const getUsers = async () => {
  try {
    const response = await api.get(`/users`);
    return response;
  } catch (error) {
    console.error(`getUsers error: ${error}`);
  }
};

export const addUser = async (email, password) => {
  try {
    const response = await api.post(`/users`, {
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
    const response = await api.get(`/posts`);
    return response.data;
  } catch (error) {
    console.error(`getPosts error: ${error}`);
  }
};
