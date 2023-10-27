import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Divider} from "@mui/material";
import PropTypes from "prop-types";

const WelcomeTab = () => {
  const CustomText = ({text}) => <p className={`fw-medium h5 text-center`}>{text}</p>
  CustomText.propTypes = {
    text: PropTypes.string.isRequired,
  }

  return <div id={'welcome-tab'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center justify-content-center'}
         style={{
           maxWidth: '780px',
         }}
    >
      <h1 className={`h2 fw-semibold mb-4`}>
        Welcome to Bias Context Research
      </h1>
      <CustomText text={
        `We're studying the relationships between societal discrimination and AI bias in hiring.`
      }/>
      <CustomText text={
        `Here, you can contribute personal accounts of discriminatory experiences and barriers that you may have faced working Berlin's Tech Sector.`
      }/>
      <CustomText text={
        `By collecting and mapping this information in the HR Bias Context Explorer, we aim to provide a comprehensive overview of intersectional discrimination to worker's unions, policy makers, journalists, AI researchers, industry experts and software designers.`
      }/>
      <CustomText text={
        `Speak out, and submit your first contribution.`
      }/>
    </div>

    <Divider />

    <OnboardingFooter
      showOnlyOne={true}
      nextButtonText={'Start'}
    />
  </div>
}

export default WelcomeTab;
