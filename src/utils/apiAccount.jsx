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
  } catch (error) {
    console.error(`loginRequest error: ${error}`);
  }
};
