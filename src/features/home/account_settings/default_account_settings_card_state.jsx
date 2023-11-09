import {Button, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";
import SlideInCard from "../components/slide_in_card.jsx";
import {AccountSettingsCardStatus} from "./account_settings_card.jsx";
import PropTypes from "prop-types";

const DefaultAccountSettingsCardState = ({
  setAccountSettingsCardStatus,
}) => {
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
        >
          Close Account
        </Button>
      </div>
    </div>
  </SlideInCard>;
}

DefaultAccountSettingsCardState.propTypes = {
  setAccountSettingsCardStatus: PropTypes.func.isRequired,
}

export default DefaultAccountSettingsCardState;
