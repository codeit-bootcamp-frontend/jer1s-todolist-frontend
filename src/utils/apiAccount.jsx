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
    console.log(response.headers);
    response.headers.get("Set-Cookie");
    return response;
  } catch (error) {
    console.error(`loginRequest error: ${error}`);
  }
};
