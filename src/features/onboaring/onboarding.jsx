import OnboardingHeader from "./header/onboarding_header.jsx";
import {Box, LinearProgress, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import OnboardingFooter from "./footer/onboarding_footer.jsx";
import WelcomeTab from "./tabs/welcome_tab.jsx";

const Onboarding = () => {
  const [onboardingProgress, setOnboardingProgress] = useState(10);
  const [currentTab, setCurrentTab] = useState(0);

  return <div id={'onboarding'}
              className={`d-flex flex-column`}
              style={{
                height: window.innerHeight,
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
