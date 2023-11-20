import OnboardingFooter from "../footer/experience_footer.jsx";
import {Box, Link, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import PropTypes from "prop-types";
import {isUserSignedIn} from "../../supabase/authentication.js";
import {useNavigate} from "react-router-dom";

const AddEmailSlide = ({
  onEmailSubmit,
}) => {
  const swiper = useSwiper();
  const navigate = useNavigate();
  const [allowNext, setAllowNext] = useState(false);

  const [email, setEmail] = useState('');

  useEffect(() => {
    isUserSignedIn().then((signedIn) => {
      if (signedIn) {
        navigate('/home');
      }
    });
  }, [navigate]);

  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Add your email address
      </h2>
      <p className={`mb-4 h5 fw-normal`}>
        Your email address is used to verify your access.
      </p>
      <Box
        component="form"
        width={'360px'}
        className={`mt-2`}
      >
        <TextField
          required
          value={email}
          type="email"
          id="email"
          label="Email"
          fullWidth={true}
          onChange={(e) => {
            setEmail(e.target.value);
            setAllowNext(e.target.validity.valid);
          }}
        />
      </Box>

      <Typography className={`mt-4`}>
        Already have an account? <Link href={'/sign-in'} className={`text-black text-decoration-underline`}>Sign in</Link>
      </Typography>
    </div>

    <OnboardingFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={() => {
        onEmailSubmit(email);
        swiper.slideNext();
      }}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>
}

AddEmailSlide.propTypes = {
  onEmailSubmit: PropTypes.func,
};

export default AddEmailSlide;
