import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";

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
        <TextField
          required
          value={password}
          type="password"
          id="password"
          label="Password"
          fullWidth={true}
          onChange={(e) => {
            setPassword(e.target.value);
            setAllowNext(e.target.validity.valid && confirmPassword === e.target.value);
          }}
        />
        <TextField
          required
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          fullWidth={true}
          error={confirmPassword !== '' && password !== confirmPassword}
          helperText={confirmPassword !== '' && password !== confirmPassword ? 'Passwords do not match' : null}
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
