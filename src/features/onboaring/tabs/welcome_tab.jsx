import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Divider} from "@mui/material";

const WelcomeTab = () => {
  return <div id={'welcome-tab'} className={`d-flex flex-column h-100`}>
    <div className={'h-100'}>
      <h1>
        Welcome to Bias Context Research
      </h1>
      <p>
        We&apos;re studying the relationships between societal discrimination and AI bias in hiring.
      </p>
      <p>
        Here, you can contribute personal accounts of discriminatory experiences and barriers that you may have faced working Berlin&apos;s Tech Sector.
      </p>
      <p>
        By collecting and mapping this information in the HR Bias Context Explorer, we aim to provide a comprehensive overview of intersectional discrimination to worker&apos;s unions, policy makers, journalists, AI researchers, industry experts and software designers.
      </p>
      <p>
        Speak out, and submit your first contribution.
      </p>
    </div>

    <Divider />

    <OnboardingFooter
      showOnlyOne={true}
      nextButtonText={'Start'}
    />
  </div>
}

export default WelcomeTab;
