import {Box, LinearProgress, Link, TextField, Typography} from "@mui/material";
import OnboardingFooter from "../onboaring/footer/onboarding_footer.jsx";
import {useEffect, useState} from "react";
import OnboardingHeader from "../onboaring/header/onboarding_header.jsx";
import PasswordField from "../../components/fields/password_field.jsx";
import {signIn, signUp} from "../supabase/authentication.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const SignInScreen = () => {
  const [allowNext, setAllowNext] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [height, setHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  return <div id={'sign-in-screen'} className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <OnboardingHeader />

    <LinearProgress variant="determinate" value={100}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <div className={`d-flex flex-column h-100 align-items-center`}>
      <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
        <h2 className={`h2 fw-semibold mb-4`}>
          Welcome to Bias Context Research
        </h2>
        <p className={`mb-4 h5 fw-normal`}>
          Sign in
        </p>
        <Box
          component="form"
          width={'360px'}
          className={`mt-2 d-flex flex-column gap-3`}
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
          <PasswordField
            id={'password'}
            label={'Password'}
            value={password}
            showError={password !== '' && password.length < 8}
            error={'Password must be at least 8 characters'}
            onChange={(e) => {
              setPassword(e.target.value);
              setAllowNext(e.target.validity.valid && e.target.value.length > 8);
            }}
          />
        </Box>

        <Typography className={`mt-4`}>
          Don&apos;t have an account? <Link href={'/onboarding'} className={`text-black text-decoration-underline`}>Sign up</Link>
        </Typography>
      </div>

      <OnboardingFooter
        nextButtonText={'Sign in'}
        isNextDisabled={!allowNext}
        onNext={async () => {
          const {data, error} = await signIn('test@test.com', 'test1234');

          if (error) {
            toast.error(error.message);
            return;
          }

          toast.success('Signed In Successfully!');
          navigate('/home');
        }}
        showOnlyOne={true}
      />
    </div>
  </div>
}

export default SignInScreen;
