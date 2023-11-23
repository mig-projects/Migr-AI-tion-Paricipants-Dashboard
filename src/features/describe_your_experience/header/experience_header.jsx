import {AppBar, Link, Toolbar, Typography} from "@mui/material";
import Logo from "../../../assets/images/logo.svg";
import variables from "../../../variables.module.scss";
import PropTypes from "prop-types";
import {AppRoutes} from "../../../App.jsx";

const ExperienceHeader = ({
  currentStep,
  totalSteps,
}) => {
  return <AppBar position="static" className={'appbar'} color={'transparent'}>
    <Toolbar style={{
      backgroundColor: 'white',
      height: '80px',
    }}>
      <Link
        className={`d-flex align-items-center flex-grow-1 text-decoration-none`}
        href={AppRoutes.HOME}
      >
        <img src={Logo} alt="logo" height={40} width={40} className={'me-4'}/>
        <Typography
          color={variables.primaryPurple}
          className={'fw-bold'}
        >
          MIGR-AI-TION
        </Typography>
      </Link>

      {
        currentStep && totalSteps && <Typography
          className={'fw-bold'}
          sx={{
            color: variables.primaryPurple,
          }}
        >
          Step: {currentStep} / {totalSteps}
        </Typography>
      }
    </Toolbar>
  </AppBar>
}

ExperienceHeader.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
}

export default ExperienceHeader;
