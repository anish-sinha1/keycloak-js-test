import React, { useState } from "react";

import { useKeycloak } from "../../auth/hooks/useKeycloak";

import { useNavigate } from "react-router-dom";

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
  return <section className="dashboard">Authenticated</section>;
};

export default Dashboard;
