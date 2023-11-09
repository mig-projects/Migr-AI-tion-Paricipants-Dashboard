import HomeHeader from "./header/home_header.jsx";
import './home_screen.scss';
import EmailCard from "./components/email_card.jsx";
import HomeLeftDrawer from "./components/home_left_drawer.jsx";
import {useState} from "react";

const HomeScreenState = {
  inProgress: 'inProgress',
  completed: 'completed',
  accountSettings: 'accountSettings',
}

export const HomeScreen = () => {
  const [homeScreenState, setHomeScreenState] = useState(HomeScreenState.inProgress);

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
      </div>

    </div>
  </div>
}

export {HomeScreen as default, HomeScreenState};
