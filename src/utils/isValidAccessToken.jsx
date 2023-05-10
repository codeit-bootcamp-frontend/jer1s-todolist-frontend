import axios from "axios";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "utils/constants";

const isValidAccessToken = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/accesstoken"`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response) {
      Navigate("/signin");
    } else {
      return response;
    }
  } catch (err) {
    if (err.response.status === 401) {
      const response = await axios.get("/refreshtoken", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      if (!response) {
        Navigate("/signin");
      } else {
        console.error(`isValidAccessToken error: ${err}`);
      }
    }
  }
};

export default isValidAccessToken;
