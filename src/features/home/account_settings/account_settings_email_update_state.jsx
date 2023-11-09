import {Box, IconButton, TextField, Typography} from "@mui/material";
import SlideInCard from "../components/slide_in_card.jsx";
import PropTypes from "prop-types";
import {useState} from "react";
import {ArrowBack} from "@mui/icons-material";
import CustomButton from "../../../components/buttons/custom_button.jsx";

const AccountSettingsEmailUpdateState = ({
  onBack,
}) => {
  const [allowSubmit, setAllowSubmit] = useState(false);

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

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
          Update your Email
        </Typography>
      </div>

      <Box
        component="form"
        width={'360px'}
        className={`d-flex flex-column gap-3 ms-3 h-100`}
      >
        <Typography>
          Add your new email
        </Typography>
        <TextField
          required
          value={email}
          type="email"
          id="email"
          label="Email"
          fullWidth={true}
          onChange={(e) => {
            setEmail(e.target.value);
            setAllowSubmit(e.target.validity.valid && e.target.value === confirmEmail);
          }}
        />
        <TextField
          required
          value={confirmEmail}
          type="email"
          id="confirmEmail"
          label="Confirm Email"
          fullWidth={true}
          error={confirmEmail !== '' && email !== confirmEmail}
          helperText={confirmEmail !== '' && email !== confirmEmail ? 'Emails do not match' : null}
          onChange={(e) => {
            setConfirmEmail(e.target.value);
            setAllowSubmit(e.target.validity.valid && email === e.target.value);
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

AccountSettingsEmailUpdateState.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default AccountSettingsEmailUpdateState;
