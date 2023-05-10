import axios from "axios";

const BASE_URL = "https://taskcomm-api-app.herokuapp.com";

export const loginRequest = async (id, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { id, password },
      {
        withCredentials: "true",
      }
    );
    response.headers.get("Set-Cookie");
    return response.json();
  } catch (error) {
    console.error(`loginRequest error: ${error}`);
  }
};
