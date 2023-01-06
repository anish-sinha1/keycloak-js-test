import axios from "axios";

import * as auth from "../auth/keycloak";

const http = axios.create();

http.interceptors.request.use(
  (config: any) => {
    const accessToken = auth.getAccessTokenSilently();
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (e: any) => Promise.reject(e)
);

http.interceptors.response.use(
  (response: any) => response,
  (e) => Promise.reject(e)
);

export default http;
