import OnboardingHeader from "./header/onboarding_header.jsx";
import {LinearProgress} from "@mui/material";
import {useState} from "react";
import OnboardingFooter from "./footer/onboarding_footer.jsx";

const Onboarding = () => {
  const [onboardingProgress, setOnboardingProgress] = useState(10);

  return <div id={'onboarding'} className={`vh-100`}>
    <OnboardingHeader />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <div className={``}>

    </div>

    <OnboardingFooter />
  </div>
}

export default Onboarding;
