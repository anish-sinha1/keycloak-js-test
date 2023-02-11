import React, { useState } from "react";

import { useKeycloak } from "../../auth/hooks/useKeycloak";

import { useNavigate } from "react-router-dom";
import * as auth from "../../auth/keycloak";
import NoRole from "./widgets/norole/NoRole";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const token = useKeycloak(setLoading);
  const navigate = useNavigate();
  if (loading) {
    return <div>Loading</div>;
  }
  if (!loading && !token) {
    navigate("/");
  }
  return (
    <section className="dashboard">
      token: {auth.getAccessTokenSilently()} <br />
      id token: {auth.getIdTokenSilently()}
      {!auth.hasResourceRole(["youth", "parent", "ally", "admin", "root"]) ? (
        <NoRole />
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Dashboard;
