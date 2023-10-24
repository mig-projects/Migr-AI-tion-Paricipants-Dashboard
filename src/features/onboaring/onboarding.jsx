import OnboardingHeader from "./header/onboarding_header.jsx";
import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import WelcomeTab from "./tabs/welcome_tab.jsx";

const Onboarding = () => {
  const [onboardingProgress, setOnboardingProgress] = useState(10);
  const [currentTab, setCurrentTab] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  return <div id={'onboarding'}
              className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <OnboardingHeader />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <WelcomeTab />
  </div>
}

export default Onboarding;
