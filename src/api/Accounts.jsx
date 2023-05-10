import api from "api";

export const loginRequest = async (id, password) => {
  try {
    const response = await api.post(
      `/login`,
      { id, password },
      {
        withCredentials: true,
      }
    );
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
