import axios from "axios";
import { BASE_URL } from "utils/constants";

export const loginRequest = async (id, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
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
    const response = await axios.get(`${BASE_URL}/logout`);
    return response;
  } catch (err) {
    console.error(`logoutRequest error: ${err}`);
  }
  return;
};
