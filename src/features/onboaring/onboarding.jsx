import OnboardingHeader from "./header/onboarding_header.jsx";
import {LinearProgress} from "@mui/material";
import {useState} from "react";

const Onboarding = () => {
  const onboardingProgress = useState(0);

  return <div id={'onboarding'}>
    <OnboardingHeader />

    <LinearProgress variant="determinate" value={20} />
    <div>

    </div>


  </div>
}

export default Onboarding;
