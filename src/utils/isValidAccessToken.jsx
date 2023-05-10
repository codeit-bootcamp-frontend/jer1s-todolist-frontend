import axios from "axios";
import { BASE_URL } from "utils/constants";

const isValidAccessToken = async (accessToken, refreshToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/accesstoken`, {
      headers: {
        Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken};`,
      },
    });
    return response;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      try {
        const response = await axios.get(`${BASE_URL}/refreshtoken`, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        return response;
      } catch (err) {
        console.error(`isValidAccessToken error: ${err}`);
        return null;
      }
    } else {
      console.error(`isValidAccessToken error: ${err}`);
      return null;
    }
  }
};

export default isValidAccessToken;
