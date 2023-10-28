import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";
import PasswordField from "../../../components/fields/password_field.jsx";

const CreatePasswordSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return <div id={'create-password-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Create your password:
      </h2>
      <Box
        component="form"
        width={'360px'}
        className={`d-flex flex-column gap-2`}
      >
        <PasswordField
          id={'password'}
          label={'Password'}
          value={password}
          showError={password !== '' && password.length < 8}
          error={'Password must be at least 8 characters'}
          onChange={(e) => {
            setPassword(e.target.value);
            setAllowNext(e.target.validity.valid && e.target.value.length > 8 && confirmPassword === e.target.value);
          }}
        />
        <PasswordField
          id={'confirmPassword'}
          label={'Confirm Password'}
          value={confirmPassword}
          showError={confirmPassword !== '' && password !== confirmPassword}
          error={'Passwords do not match'}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setAllowNext(e.target.validity.valid && e.target.value.length > 8 && password === e.target.value);
          }}
        />
      </Box>
    </div>

    <OnboardingFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
      onNext={() => {
        swiper.slideNext();
      }}
    />
  </div>
}

export default CreatePasswordSlide;
