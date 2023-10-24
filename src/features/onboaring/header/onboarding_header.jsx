import {AppBar, Toolbar, Typography} from "@mui/material";
import Logo from "../../../assets/images/logo.svg";
import variables from "../../../variables.module.scss";

const OnboardingHeader = () => {
  return <AppBar position="static" className={'appbar'} color={'transparent'}>
    <Toolbar style={{
      height: '80px',
    }}>
      <img src={Logo} alt="logo" height={40} width={40} className={'me-4'}/>

      <Typography
        color={variables.primaryPurple}
        className={'fw-bold'}
      >
        MIGR-AI-TION
      </Typography>
    </Toolbar>
  </AppBar>
}

export default OnboardingHeader;
