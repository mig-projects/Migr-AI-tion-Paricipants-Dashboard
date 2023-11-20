import OnboardingFooter from "../footer/experience_footer.jsx";
import PropTypes from "prop-types";
import {useSwiper} from "swiper/react";
import variables from "../../../variables.module.scss";
import {Card, CardContent, Checkbox, FormControlLabel, Link, Typography} from "@mui/material";
import DataLossPrevention from "../../../assets/icons/data_loss_prevention.svg";
import AddChart from "../../../assets/icons/add_chart.svg";
import ZoomInMap from "../../../assets/icons/zoom_in_map.svg";
import {useEffect, useState} from "react";
import {isUserSignedIn} from "../../supabase/authentication.js";
import {useNavigate} from "react-router-dom";

const WelcomeSlide = () => {
  const swiper = useSwiper();
  const navigate = useNavigate();

  const [allowNext, setAllowNext] = useState(false);

  useEffect(() => {
    isUserSignedIn().then((signedIn) => {
      if (signedIn) {
        navigate('/home');
      }
    });
  }, [navigate]);

  const CustomCard = ({text, image}) => <Card>
    <CardContent
      className={`d-flex flex-column align-items-center gap-3 p-4`}
    >
      <img src={image} alt="Data Loss Prevention"/>
      <Typography>
        {text}
      </Typography>
    </CardContent>
  </Card>
  CustomCard.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
  }

  return <div id={'welcome-slide'} className={`d-flex flex-column h-100 align-items-center`}
              style={{
                backgroundColor: variables.backgroundPurple,
              }}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper text-white gap-3'}
    >
      <h1 className={`h2 fw-semibold`}>
        Welcome to Bias Context Research
      </h1>
      <div className={`d-flex gap-3 mb-3`}>
        <CustomCard
          image={DataLossPrevention}
          text={'We\'re studying the relationships between societal discrimination and AI bias in hiring.'}
        />
        <CustomCard
          image={AddChart}
          text={'Here, you can contribute personal accounts of discriminatory experiences and barriers that you may have faced working in Berlin\'s Tech Sector. '}
        />
        <CustomCard
          image={ZoomInMap}
          text={'By collecting this information in the Public Dashboard, we aim to provide a comprehensive overview of intersectional discrimination to worker\'s unions, policy makers, journalists, AI researchers, industry experts and software designers.'}
        />
      </div>

      <Typography>
        To speak out, and submit your first contribution we need your consent:
      </Typography>

      <div className={`d-flex flex-column`}>
        <div className={`d-flex gap-3`}>
          <Link
            className={`text-white link-underline-light`}
            href={''}
          >
            Read consent
          </Link>
          <Link
            className={`text-white link-underline-light`}
            href={''}
          >
            GDPR
          </Link>
        </div>

        <FormControlLabel
          control={<Checkbox
            value={allowNext}
            onChange={(e) => {
              setAllowNext(e.target.checked);
            }}
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
          />}
          label="I agree to be part of the research"
        />
      </div>

    </div>

    <OnboardingFooter
      isNextDisabled={!allowNext}
      showOnlyOne={true}
      nextButtonText={'Start'}
      onNext={() => swiper.slideNext()}
    />
  </div>
}

export default WelcomeSlide;
