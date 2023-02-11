import React, { useState, useContext } from "react";
import { OnboardingCtx } from "../OnboardingCtx";

import { ReactSVG } from "react-svg";

const ClientType: React.FC = () => {
  const ctx = useContext(OnboardingCtx);
  const [clientType, setClientType] = useState<"Ally" | "Youth">("Youth");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div className="norole-onboarding-client">
      <div
        className="norole-onboarding-client-dropdown"
        onMouseLeave={() => setShowOptions(() => false)}
      >
        <div
          className="norole-onboarding-client-main"
          onClick={() => setShowOptions(() => true)}
        >
          <div className="norole-onboarding-client-main__container">
            {clientType}
          </div>
        </div>
        {showOptions && (
          <div className="norole-onboarding-client-options">
            <div onClick={() => setClientType(() => "Youth")}>Youth</div>
            <div onClick={() => setClientType(() => "Ally")}>Ally</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientType;
