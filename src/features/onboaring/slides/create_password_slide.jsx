import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";

const CreatePasswordSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center'}>
      <h2 className={`h2 fw-semibold mb-3`}>
        Create your password:
      </h2>
      <Box
        component="form"
        width={'360px'}
      >
        <TextField
          required
          type="password"
          id="password"
          label="Password"
          fullWidth={true}
          onChange={(e) => {
            setAllowNext(e.target.validity.valid);
          }}
        />
        <TextField
          required
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          fullWidth={true}
          onChange={(e) => {
            setAllowNext(e.target.validity.valid);
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
