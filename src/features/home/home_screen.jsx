import HomeHeader from "./header/home_header.jsx";
import './home_screen.scss';
import EmailCard from "./components/email_card.jsx";
import HomeLeftDrawer from "./components/home_left_drawer.jsx";
import {useEffect, useState} from "react";
import AccountSettingsCard from "./account_settings/account_settings_card.jsx";
import InProgressCardsList from "./in_progress/in_progress_cards_list.jsx";
import PublishedCardsList from "./published/published_cards_list.jsx";
import {useNavigate} from "react-router-dom";
import {isUserSignedIn} from "../supabase/authentication.js";
import {AppRoutes} from "../../App.jsx";
import {fetchAllExperiences} from "../supabase/database/experience.js";
import {CircularProgress, Typography} from "@mui/material";
import CustomButton from "../../components/buttons/custom_button.jsx";

const HomeScreenState = {
  inProgress: 'inProgress',
  published: 'published',
  accountSettings: 'accountSettings',
}

export const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    isUserSignedIn().then((signedIn) => {
      if (!signedIn) {
        navigate(AppRoutes.SIGN_IN);
      }
    });
  }, [navigate]);

  const [homeScreenState, setHomeScreenState] = useState(HomeScreenState.published);

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchAllExperiences().then(({data, error}) => {
      if (error) {
        setError(error);
      } else {
        setExperiences(data);
      }
      setLoading(false);
    });
  }, [refresh]);

  const centered = {
    height: '100%',
    margin: 'auto',
  }

  const refreshFunction = () => {
    setRefresh(!refresh);
  }

  return <div id={`home`} className={`overflow-x-hidden`}>
    <HomeHeader />

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
          homeScreenState === HomeScreenState.accountSettings ?
            <AccountSettingsCard /> :
            loading ? <CircularProgress sx={centered}/> :
              error ? <Typography sx={centered}>{error}</Typography> :
                homeScreenState === HomeScreenState.inProgress ?
                  <InProgressCardsList
                    experiences={experiences.filter((experience) => !experience.published)}
                    refreshFunction={refreshFunction}
                  /> :
                  homeScreenState === HomeScreenState.published ?
                    <PublishedCardsList
                      experiences={experiences.filter((experience) => experience.published)}
                      refreshFunction={refreshFunction}
                    /> : <p>Very Weird! Refresh pls...</p>
        }
      </div>

    </div>
  </div>
}

export {HomeScreen as default, HomeScreenState};
