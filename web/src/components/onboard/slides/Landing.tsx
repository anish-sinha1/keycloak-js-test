import React from "react";

const Landing: React.FC = () => {
  return (
    <section className="onboarding-landing">
      <div className="onboarding-landing-items">
        <h1 className="onboarding-landing-items__heading">Welcome to Sonar</h1>
        <h3>
          A platform to proactively identify and support youth mental health
        </h3>
        <button className="button button-secondary">Join Sonar</button>
      </div>
    </section>
  );
};

export default Landing;
