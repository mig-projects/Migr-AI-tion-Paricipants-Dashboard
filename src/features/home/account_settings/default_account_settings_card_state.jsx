import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import {ChevronRight, Info} from "@mui/icons-material";
import SlideInCard from "../components/slide_in_card.jsx";
import {AccountSettingsCardStatus} from "./account_settings_card.jsx";
import PropTypes from "prop-types";
import {useState} from "react";
import CustomButton from "../../../components/buttons/custom_button.jsx";
import PasswordField from "../../../components/fields/password_field.jsx";

const DefaultAccountSettingsCardState = ({
  setAccountSettingsCardStatus,
}) => {
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [password, setPassword] = useState('');

  const buttonStyle = {
    height: '70px',
    border: '1.5px solid #E7E7E7',
    borderRadius: '8px',
  };

  return <SlideInCard>
    <div className={`d-flex flex-column gap-3 h-100`}
         style={{
           maxWidth: '800px',
         }}
    >
      <Typography className={`fs-5 fw-semibold mb-3`}>
        Your Account Settings
      </Typography>

      <Button variant="outlined" fullWidth
              sx={buttonStyle}
              onClick={() => setAccountSettingsCardStatus(AccountSettingsCardStatus.emailUpdate)}
      >
        <div className={`d-flex justify-content-between text-black w-100 px-2`}>
          <Typography className={`fw-semibold`}>
            Update your Email
          </Typography>

          <ChevronRight />
        </div>
      </Button>

      <Button variant="outlined" fullWidth
              sx={buttonStyle}
              onClick={() => setAccountSettingsCardStatus(AccountSettingsCardStatus.passwordUpdate)}
      >
        <div className={`d-flex justify-content-between text-black w-100 px-2`}>
          <Typography className={`fw-semibold`}>
            Update your Password
          </Typography>

          <ChevronRight />
        </div>
      </Button>

      <div className={`flex-grow-1`} />

      <div
        style={{
          height: '70px',
          border: '1.5px solid #E7E7E7',
          borderRadius: '8px',
        }}
        className={`d-flex justify-content-between align-items-center text-black w-100 px-4`}
      >

        <div className={`d-flex flex-column align-items-start`}>
          <Typography className={`fw-semibold`}>
            Close Account
          </Typography>

          <Typography className={`fw-light`} style={{fontSize: '12px', color: '##ADADAD'}}>
            Closing your account can’t be undone. We value your participation.
          </Typography>
        </div>

        <Button variant="outlined" color={`error`}
                sx={{
                  borderRadius: '8px',
                }}
                onClick={() => {
                  setPassword('');
                  setIsDialogOpen(true);
                  setAllowSubmit(false);
                }}
        >
          Close Account
        </Button>
      </div>
    </div>

    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}
    >
      <div className={`d-flex flex-column align-items-center px-5 py-4`}>
        <DialogTitle className={`fw-semibold d-flex flex-column align-items-center gap-3`}>
          <Info sx={{fontSize: '60px', color: 'red'}} />
          <p className={`fs-5 text-center`}>Are you sure you want to close your account?</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={`d-flex flex-column align-items-center text-black`}>
              <p className={`text-center mb-4`}>Closing your account will mean your data is not part of the research. We really value your contribution.</p>
              <p>Enter password:</p>
              <PasswordField
                id={'password'}
                label={'Password'}
                value={password}
                showError={password !== '' && password.length < 8}
                error={'Password must be at least 8 characters'}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setAllowSubmit(e.target.validity.valid && e.target.value.length > 8);
                }}
                sx={{
                  width: '300px',
                  marginBottom: '10px',
                }}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            width: '400px',
          }}
        >
          <CustomButton text={'Cancel'} onClick={() => setIsDialogOpen(false)}/>
          <CustomButton text={'Close Account'} color={`error`} variant={`outlined`}
                        disabled={!allowSubmit}
                        onClick={() => {

                        }}
          />
        </DialogActions>
      </div>
    </Dialog>
  </SlideInCard>;
}

DefaultAccountSettingsCardState.propTypes = {
  setAccountSettingsCardStatus: PropTypes.func.isRequired,
}

export default DefaultAccountSettingsCardState;
