import {
  AppBar, Link,
  Toolbar,
  Typography
} from "@mui/material";
import Logo from "../../../assets/images/logo.svg";
import variables from "../../../variables.module.scss";
import CustomButton from "../../../components/buttons/custom_button.jsx";
import {useNavigate} from "react-router-dom";
import {signOut} from "../../supabase/authentication.js";
import {toast} from "react-toastify";
import {AppRoutes} from "../../../App.jsx";

const HomeHeader = () => {
  const navigate = useNavigate();

  return <AppBar component="nav" position="static" className={'appbar'} color={'transparent'}>
    <Toolbar style={{
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

      <div className={`d-flex gap-2`}>
        <CustomButton variant={`outlined`} text={'Discord Community'} sx={{
          width: '200px',
        }}
          onClick={() => {
            window.open("https://discord.gg/pV4rzKcm", "_blank")
          }}
        />
        <CustomButton text={'HR Bias Analysis'} sx={{
          width: '180px',
        }}
          onClick={() => {
            toast.info('Coming soon!');
          }}
        />
        <CustomButton
          text={'Log out'}
          variant={`outlined`}
          className={`text-black border-0`}
          sx={{
            width: '100px',
            borderRadius: '8px',
          }}
          onClick={async () => {
            const {error} = await signOut();

            if (error) {
              toast.error(error.message);
              return;
            }

            navigate(AppRoutes.SIGN_IN);
          }}
        >
          Log out
        </CustomButton>
      </div>
    </Toolbar>
  </AppBar>
}

export default HomeHeader;
