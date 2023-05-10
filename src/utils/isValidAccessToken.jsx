import axios from "axios";
import { Navigate } from "react-router-dom";

const isValidAccessToken = async () => {
  try {
    const response = await axios.get("/accesstoken", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
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
