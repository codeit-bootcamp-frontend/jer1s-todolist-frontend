import api from "api";

export const getUsers = async () => {
  try {
    const response = await api.get(`/users`);
    return response.data;
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

export const getTasks = async ({ query }) => {
  try {
    const params = query ? { params: query } : {};
    const response = await api.get(`/posts`, params);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`getTasks error: ${error}`);
  }
};
