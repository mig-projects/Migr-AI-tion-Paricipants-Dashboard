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

  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center'}>
      <h2 className={`h2 fw-semibold mb-3`}>
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
          onChange={(e) => {
            setPassword(e.target.value);
            setAllowNext(e.target.validity.valid && confirmPassword === e.target.value);
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
            setAllowNext(e.target.validity.valid && password === e.target.value);
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
    />
  </div>
}

export default CreatePasswordSlide;
