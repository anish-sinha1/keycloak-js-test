import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "../../auth/hooks/useKeycloak";

import * as auth from "../../auth/keycloak";

const Landing: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const token = useKeycloak(setLoading);
  const navigate = useNavigate();
  if (!loading && token) navigate("/dashboard");
  return (
    <section className="onboarding-landing">
      <div className="onboarding-landing-items">
        <h1 className="onboarding-landing-items__heading">Welcome to Sonar</h1>
        <h3>
          A platform to proactively identify and support youth mental health
        </h3>
        <div className="onboarding-landing-actions">
          <button
            className="button button-secondary"
            onClick={() => auth.register()}
          >
            Join Sonar
          </button>
          <button
            className="button button-accent"
            onClick={() =>
              auth.login({ redirectUri: "http://localhost:3000/dashboard" })
            }
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
