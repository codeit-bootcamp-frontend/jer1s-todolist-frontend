import api from "api";

const isValidAccessToken = async (accessToken, refreshToken) => {
  try {
    const response = await api.get(`/accesstoken`, {
      headers: {
        Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken};`,
      },
    });
    return response;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      try {
        const response = await api.get(`/refreshtoken`, {
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
