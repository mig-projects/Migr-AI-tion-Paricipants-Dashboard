import HomeHeader from "./header/home_header.jsx";
import './home_screen.scss';
import EmailCard from "./components/email_card.jsx";
import HomeLeftDrawer from "./components/home_left_drawer.jsx";
import {useState} from "react";
import AccountSettingsCard from "./account_settings/account_settings_card.jsx";

const HomeScreenState = {
  inProgress: 'inProgress',
  completed: 'completed',
  accountSettings: 'accountSettings',
}

export const HomeScreen = () => {
  const [homeScreenState, setHomeScreenState] = useState(HomeScreenState.accountSettings);

  return <div id={`home`}>
    <HomeHeader />

    {document.body.getAttribute('')}
    <div id={`home-content`}>
      <EmailCard />

      <div style={{height: '20px'}}/>

      <div className={`d-flex`}>
        <HomeLeftDrawer
          currentScreenState={homeScreenState}
          setCurrentScreenState={setHomeScreenState}
        />
        <div style={{width: '20px'}}/>

        {
          homeScreenState === HomeScreenState.inProgress &&
          <div className={`flex-grow-1`}>
            In progress
          </div>
        }

        {
          homeScreenState === HomeScreenState.completed &&
          <div className={`flex-grow-1`}>
            Completed
          </div>
        }

        {
          homeScreenState === HomeScreenState.accountSettings &&
          <AccountSettingsCard />
        }
      </div>

    </div>
  </div>
}

export {HomeScreen as default, HomeScreenState};
