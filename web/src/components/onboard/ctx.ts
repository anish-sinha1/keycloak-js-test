import React from "react";

export interface OnboardingState {
  slideNo: number;
  clientType: "user" | "parent" | "ally";
  setSlideNo: (x: any) => any;
  setClientType: (x: any) => any;
}

export const OnboardingCtx = React.createContext<OnboardingState>({
  slideNo: 0,
  clientType: "user",
  setSlideNo: () => {
    console.error("default set method should not be used");
  },
  setClientType: () => {
    console.error("default set method should not be used");
  },
});
