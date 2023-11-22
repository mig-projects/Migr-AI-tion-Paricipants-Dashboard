import {Card, Chip} from "@mui/material";
import PropTypes from "prop-types";
import {HomeScreenState} from "../home_screen.jsx";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../App.jsx";
import CustomChip from "./custom_chip.jsx";

const HomeLeftDrawer = ({
  currentScreenState,
  setCurrentScreenState,
}) => {
  const navigate = useNavigate();

  return <Card className={`d-flex flex-column justify-content-between gap-3 flex-shrink-0`}
               elevation={0}
               style={{
                 padding: '20px 30px',
                 height: 'calc(100vh - 220px)',
               }}
  >
    <CustomChip
      text={'In progress'}
      selected={currentScreenState === HomeScreenState.inProgress}
      onClick={() => setCurrentScreenState(HomeScreenState.inProgress)}
    />
    <CustomChip
      text={'Published'}
      selected={currentScreenState === HomeScreenState.published}
      onClick={() => setCurrentScreenState(HomeScreenState.published)}
    />
    <CustomChip
      text={'+ Add New Entry'}
      selected={false}
      onClick={() => {
        navigate(AppRoutes.DESCRIBE_YOUR_EXPERIENCE);
      }}
    />

    <div className={`flex-grow-1`}/>

    <CustomChip
      text={'Account Settings'}
      selected={currentScreenState === HomeScreenState.accountSettings}
      onClick={() => setCurrentScreenState(HomeScreenState.accountSettings)}
    />
  </Card>
}

HomeLeftDrawer.propTypes = {
  currentScreenState: PropTypes.string.isRequired,
  setCurrentScreenState: PropTypes.func.isRequired,
}

export default HomeLeftDrawer;
