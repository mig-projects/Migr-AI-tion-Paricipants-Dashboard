import {Typography} from "@mui/material";
import SlideInCard from "../components/slide_in_card.jsx";
import PropTypes from "prop-types";

const AccountSettingsPasswordUpdateState = ({
  onBack,
}) => {
  return <SlideInCard>
    <div className={`d-flex flex-column gap-3 h-100`}
         style={{
           maxWidth: '800px',
         }}
    >
      <Typography className={`fs-5 fw-semibold mb-3`}>
        Your Account Settings
      </Typography>
    </div>
  </SlideInCard>;
}

AccountSettingsPasswordUpdateState.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default AccountSettingsPasswordUpdateState;
