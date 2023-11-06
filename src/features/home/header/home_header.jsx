import {AppBar, Divider, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import Logo from "../../../assets/images/logo.svg";
import variables from "../../../variables.module.scss";

const HomeHeader = () => {
  return <AppBar position="fixed" className={'appbar'} color={'transparent'}>
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

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={'meow'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Toolbar>
  </AppBar>
}

export default HomeHeader;
