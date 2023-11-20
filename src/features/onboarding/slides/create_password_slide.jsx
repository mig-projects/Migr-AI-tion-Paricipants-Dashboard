import {Box} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";
import PasswordField from "../../../components/fields/password_field.jsx";
import {toast} from "react-toastify";
import {signUp} from "../../supabase/authentication.js";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import ExperienceFooter from "../../describe_your_experience/footer/experience_footer.jsx";
import {AppRoutes} from "../../../App.jsx";

const CreatePasswordSlide = ({
  email,
}) => {
  const swiper = useSwiper();
  const navigate = useNavigate();
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
        className={`d-flex flex-column gap-3`}
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

    <ExperienceFooter
      nextButtonText={'Sign Up'}
      isNextDisabled={!allowNext}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
      onNext={async () => {
        const {data, error} = await signUp(email, password);

        if (error) {
          toast.error(error.message);
          return;
        }

        toast.success('Signed Up Successfully!\nPlease confirm your email & Sign in');
        navigate(AppRoutes.SIGN_IN, { state: { freshSignUp: true } });
      }}
    />
  </div>
}

CreatePasswordSlide.propTypes = {
  email: PropTypes.string,
}

export default CreatePasswordSlide;
