import { useState, useEffect } from "react";

import * as auth from "../keycloak";

export const useKeycloak = (setLoading?: (state: boolean) => any) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const getToken = async () => {
    const token = auth.getAccessTokenSilently();
    setToken(token);
    console.log(token);
    console.log(auth.hasResourceRole(["youth"], "sonar_api"));
  };
  useEffect(() => {
    getToken();
    if (setLoading) setLoading(false);
  }, []);
  return token;
};
