import React, { useState, useContext } from "react";

import styles from "./scss/Onboarding.module.scss";

import { OnboardingState, OnboardingCtx } from "./ctx";

import Landing from "./slides/Landing";

const Onboarding: React.FC = () => {
  const [slideNo, setSlideNo] = useState<number>(0);
  const [clientType, setClientType] = useState<"user" | "parent" | "ally">(
    "user"
  );

  const slides = [<Landing />];

  return (
    <OnboardingCtx.Provider
      value={{ slideNo, clientType, setSlideNo, setClientType }}
    >
      {slides[slideNo]}
    </OnboardingCtx.Provider>
  );
};

export default Onboarding;
