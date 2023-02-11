import React from "react";

export interface OnboardingConfig {
  slideNum: number;
  setSlideNum: (_x: any) => any;
  clientType: "ally" | "youth";
  setClientType: (_x: any) => any;
  schoolCode: string | undefined;
  setSchoolCode: (_x: any) => any;
}

export const OnboardingCtx = React.createContext<OnboardingConfig>({
  slideNum: 0,
  clientType: "youth",
  schoolCode: undefined,
  setClientType: () =>
    console.warn("default setter may cause undefined behavior"),
  setSchoolCode: () =>
    console.warn("default setter may cause undefined behavior"),
  setSlideNum: () =>
    console.warn("default setter may cause undefined behavior"),
});
