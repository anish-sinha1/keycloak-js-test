import React, { useState } from "react";

import { OnboardingCtx } from "./OnboardingCtx";
import ClientType from "./steps/ClientType";
import Start from "./steps/Start";

const Onboarding: React.FC = () => {
  const [slideNum, setSlideNum] = useState<number>(0);
  const [clientType, setClientType] = useState<"ally" | "youth">("youth");
  const [schoolCode, setSchoolCode] = useState<string | undefined>(undefined);
  const steps = [<Start />, <ClientType />];
  console.log(slideNum);
  return (
    <OnboardingCtx.Provider
      value={{
        clientType,
        schoolCode,
        slideNum,
        setClientType,
        setSchoolCode,
        setSlideNum,
      }}
    >
      <section className="norole-onboarding">
        <div className="norole-onboarding-header">
          <h1>Welcome to Sonar</h1>
        </div>
        <div className="norole-onboarding-slide">{steps[slideNum]}</div>
        <button
          className="button button-primary norole-onboarding-next"
          onClick={() => setSlideNum((current: number) => current + 1)}
        >
          Next
        </button>
      </section>
    </OnboardingCtx.Provider>
  );
};

export default Onboarding;
