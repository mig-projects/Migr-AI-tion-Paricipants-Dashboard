import {Box, IconButton, Typography} from "@mui/material";
import SlideInCard from "../components/slide_in_card.jsx";
import PropTypes from "prop-types";
import {ArrowBack} from "@mui/icons-material";
import PasswordField from "../../../components/fields/password_field.jsx";
import {useState} from "react";
import CustomButton from "../../../components/buttons/custom_button.jsx";

const AccountSettingsPasswordUpdateState = ({
  onBack,
}) => {
  const [allowSubmit, setAllowSubmit] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return <SlideInCard>
    <div className={`d-flex flex-column gap-3 h-100`}
         style={{
           maxWidth: '800px',
         }}
    >
      <div className={`d-flex align-items-center gap-2 mb-4`}>
        <IconButton onClick={onBack}>
          <ArrowBack />
        </IconButton>
        <Typography className={`fs-5 fw-semibold`}>
          Update your Password
        </Typography>
      </div>

      <Box
        component="form"
        width={'360px'}
        className={`d-flex flex-column gap-3 ms-3 h-100`}
      >
        <Typography>
          New password:
        </Typography>
        <PasswordField
          id={'password'}
          label={'Password'}
          value={password}
          showError={password !== '' && password.length < 8}
          error={'Password must be at least 8 characters'}
          onChange={(e) => {
            setPassword(e.target.value);
            setAllowSubmit(e.target.validity.valid && e.target.value.length > 8 && confirmPassword === e.target.value);
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
            setAllowSubmit(e.target.validity.valid && e.target.value.length > 8 && password === e.target.value);
          }}
        />

        <div className={`flex-grow-1`}/>

        <CustomButton text={'Save Changes'} sx={{
                        width: '200px',
                      }}
                      disabled={!allowSubmit}
        />
      </Box>

    </div>
  </SlideInCard>;
}

AccountSettingsPasswordUpdateState.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default AccountSettingsPasswordUpdateState;
