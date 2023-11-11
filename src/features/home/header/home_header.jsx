import {
  AppBar,
  Button,
  Toolbar,
  Typography
} from "@mui/material";
import Logo from "../../../assets/images/logo.svg";
import variables from "../../../variables.module.scss";
import CustomButton from "../../../components/buttons/custom_button.jsx";

const HomeHeader = () => {
  return <AppBar component="nav" position="static" className={'appbar'} color={'transparent'}>
    <Toolbar style={{
      height: '80px',
    }}>
      <img src={Logo} alt="logo" height={40} width={40} className={'me-4'}/>

      <Typography
        color={variables.primaryPurple}
        className={'fw-bold flex-grow-1'}
      >
        MIGR-AI-TION
      </Typography>

      <div className={`d-flex gap-2`}>
        <CustomButton variant={`outlined`} text={'Discord Community'} sx={{
          width: '200px',
        }} />
        <CustomButton text={'HR Bias Explorer'} sx={{
          width: '180px',
        }} />
        <Button className={`text-black`} sx={{
          width: '100px',
          borderRadius: '8px',
        }} >
          Log out
        </Button>
      </div>
    </Toolbar>
  </AppBar>
}

export default HomeHeader;
