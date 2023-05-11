import api from "api/index";

export const loginRequest = async (id, password) => {
  try {
    const response = await api.post(`/login`, { id, password });
    return response;
  } catch (err) {
    console.error(`loginRequest error: ${err}`);
  }
};

export const logoutRequest = async () => {
  try {
    const response = await api.get(`/logout`);
    return response;
  } catch (err) {
    console.error(`logoutRequest error: ${err}`);
  }
  return;
};
