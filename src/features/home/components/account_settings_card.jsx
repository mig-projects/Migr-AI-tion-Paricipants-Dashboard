import {Button, Card, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";

const AccountSettingsCard = () => {
  const buttonStyle = {
    height: '70px',
    border: '1.5px solid #E7E7E7',
  };

  return <Card className={`flex-grow-1`}
               elevation={0}
               style={{
                 padding: '20px 30px',
               }}
  >
    <div className={`d-flex flex-column gap-3`}
          style={{
            maxWidth: '800px',
          }}
    >
      <Typography className={`fs-5 fw-semibold mb-3`}>
        Your Account Settings
      </Typography>

      <Button variant="outlined" fullWidth
              sx={buttonStyle}
      >
        <div className={`d-flex justify-content-between text-black w-100 px-2`}>
          <Typography>
            Update your Email
          </Typography>

          <ChevronRight />
        </div>
      </Button>

      <Button variant="outlined" fullWidth
              sx={buttonStyle}
      >
        <div className={`d-flex justify-content-between text-black w-100 px-2`}>
          <Typography>
            Update your Password
          </Typography>

          <ChevronRight />
        </div>
      </Button>

      <div style={{height: '100px'}} />

      <div
        style={{
          height: '70px',
          border: '1.5px solid #E7E7E7',
          borderRadius: '8px',
        }}
        className={`d-flex justify-content-between align-items-center text-black w-100 px-4`}
      >

        <div className={`d-flex flex-column align-items-start`}>
          <Typography>
            Close Account
          </Typography>

          <Typography className={`fw-light`} style={{fontSize: '12px'}}>
            Closing your account can’t be undone. We value your participation.
          </Typography>
        </div>

        <Button variant="outlined" color={`error`}>Close Account</Button>
      </div>
    </div>
  </Card>;
}

export default AccountSettingsCard;
