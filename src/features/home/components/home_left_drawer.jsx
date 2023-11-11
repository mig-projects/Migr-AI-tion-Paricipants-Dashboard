import {Card, Chip} from "@mui/material";
import PropTypes from "prop-types";
import {HomeScreenState} from "../home_screen.jsx";

const HomeLeftDrawer = ({
  currentScreenState,
  setCurrentScreenState,
}) => {
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
      text={'Completed'}
      selected={currentScreenState === HomeScreenState.completed}
      onClick={() => setCurrentScreenState(HomeScreenState.completed)}
    />
    <CustomChip
      text={'+ Add New Entry'}
      selected={false}
      onClick={() => {}}
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

const CustomChip = ({
  text,
  selected,
  onClick,
}) => {
  return <Chip label={text} onClick={onClick}
               variant="outlined"
               sx={{
                 borderRadius: '8px',
                 backgroundColor: selected ? '#d3c7fa' : 'white',
                 border: '2px solid rgba(116, 56, 226, 0.30)',
                 width: '200px',
                 height: '50px',
                 "&&:hover": {
                   backgroundColor: selected ? '#d3c7fa' : '#f5f5f5',
                 },
               }}
               className={`fw-semibold fs-6`}
  />
}

CustomChip.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default HomeLeftDrawer;
