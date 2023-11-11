import HomeHeader from "./header/home_header.jsx";
import './home_screen.scss';
import EmailCard from "./components/email_card.jsx";
import HomeLeftDrawer from "./components/home_left_drawer.jsx";
import {useState} from "react";
import AccountSettingsCard from "./account_settings/account_settings_card.jsx";
import InProgressCardsList from "./in_progress/in_progress_cards_list.jsx";

const HomeScreenState = {
  inProgress: 'inProgress',
  completed: 'completed',
  accountSettings: 'accountSettings',
}

export const HomeScreen = () => {
  const [homeScreenState, setHomeScreenState] = useState(HomeScreenState.inProgress);

  return <div id={`home`} className={`overflow-x-hidden`}>
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

        <div style={{width: '20px', flexShrink: '0'}}/>

        {
          homeScreenState === HomeScreenState.inProgress &&
          <InProgressCardsList />
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
