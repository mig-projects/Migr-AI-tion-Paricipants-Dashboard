import {Box, LinearProgress, Link, TextField, Typography} from "@mui/material";
import ExperienceFooter from "../describe_your_experience/footer/experience_footer.jsx";
import {useEffect, useState} from "react";
import ExperienceHeader from "../describe_your_experience/header/experience_header.jsx";
import PasswordField from "../../components/fields/password_field.jsx";
import {isUserSignedIn, signIn} from "../supabase/authentication.js";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import {validateEmail} from "../../utility_functions.js";
import {AppRoutes} from "../../App.jsx";

const SignInScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {freshSignUp} = location.state || false;

  useEffect(() => {
    isUserSignedIn().then((signedIn) => {
      if (signedIn) {
        navigate(AppRoutes.HOME);
      }
    });
  }, [navigate]);

  const [allowNext, setAllowNext] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  useEffect(() => {
    setAllowNext(false);
    if (email !== '' && password !== '') {
      if (validateEmail(email) && password.length >= 8) {
        setAllowNext(true);
      }
    }
  }, [email, password]);

  return <div id={'sign-in-screen'} className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <ExperienceHeader />

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
            }}
          />
        </Box>

        <Typography className={`mt-4`}>
          Don&apos;t have an account? <Link href={'/describe_your_experience'} className={`text-black text-decoration-underline`}>Sign up</Link>
        </Typography>
      </div>

      <ExperienceFooter
        nextButtonText={'Sign in'}
        isNextDisabled={!allowNext}
        onNext={async () => {
          const {data, error} = await signIn(email, password);

          if (error) {
            toast.error(error.message);
            return;
          }

          toast.success('Signed In Successfully!');

          if (freshSignUp) {
            navigate(AppRoutes.DESCRIBE_YOUR_EXPERIENCE, { state: { freshSignUp: freshSignUp } });
          } else {
            navigate(AppRoutes.HOME);
          }
        }}
        showOnlyOne={true}
      />
    </div>
  </div>
}

export default SignInScreen;
