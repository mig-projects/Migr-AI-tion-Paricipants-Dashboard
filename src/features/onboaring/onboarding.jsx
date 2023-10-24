import OnboardingHeader from "./header/onboarding_header.jsx";
import {LinearProgress} from "@mui/material";
import {useState} from "react";
import styles from './onboarding.module.scss';

const Onboarding = () => {
  const [onboardingProgress, setOnboardingProgress] = useState(10);

  return <div id={'onboarding'}>
    <OnboardingHeader />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    className={`${styles.progressBar}`}
    />

    <div>

    </div>


  </div>
}

export default Onboarding;
