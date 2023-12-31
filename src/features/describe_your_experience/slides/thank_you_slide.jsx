import ExperienceFooter from "../footer/experience_footer.jsx";
import {Box, Card, Chip} from "@mui/material";
import variables from "../../../variables.module.scss";
import {useSwiper} from "swiper/react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {updateExperienceHideAndPublished} from "../../supabase/database/experience.js";
import {toast} from "react-toastify";
import {AppRoutes} from "../../../App.jsx";

const ThankYouSlide = ({
  experienceID,
  hideText,
  thankYouSlideExperience,
}) => {
  const swiper = useSwiper();
  const navigate = useNavigate();

  const [detailedSelected, setDetailedSelected] = useState(true);

  useEffect(() => {
    if (hideText) {
      setDetailedSelected(!hideText);
    }
  }, [hideText]);

  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
              style={{
                backgroundColor: variables.backgroundPurple,
              }}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-3 text-white`}>
        Thank you for speaking out.
      </h2>
      <p className={`mb-5 h5 fw-normal text-white`}>
        Your Contributor Card is ready, select the one you would like to share in a Public Dashboard.
      </p>
      <Box
        component="form"
        className={`d-flex gap-5 mb-5 align-items-start`}
      >
        <Card className={`py-4 px-5 flex-shrink-0 d-flex flex-column gap-2`}
          style={{
            backgroundColor: '#dfd4f2',
            boxShadow: !detailedSelected ? '0px 0px 10px 10px rgba(255, 255, 255, 0.25)' : 'none',
            cursor: 'pointer',
          }}
              onClick={() => {
                setDetailedSelected(false);
              }}
        >
          <p className={`fs-2 fw-bold`}>“{thankYouSlideExperience.headline}”</p>
          <div className={`d-flex gap-2`}>
            {
              thankYouSlideExperience.categories?.map((tag, index) => {
                return <Chip
                  key={index}
                  variant="filled"
                  label={tag}
                />
              })
            }
          </div>
          <div className={`d-flex gap-2 mb-2`}>
            {
              thankYouSlideExperience.tags?.map((tag, index) => {
                return <Chip
                  key={index}
                  variant="filled"
                  label={tag}
                />
              })
            }
          </div>
        </Card>

        <Card className={`py-4 px-5 d-flex flex-column gap-2`}
              style={{
                backgroundColor: '#dfd4f2',
                boxShadow: detailedSelected ? '0px 0px 10px 10px rgba(255, 255, 255, 0.25)' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => {
                setDetailedSelected(true);
              }}
        >
          <p className={`fs-2 fw-bold`}>“{thankYouSlideExperience.headline}”</p>
          <div className={`d-flex gap-2`}>
            {
              thankYouSlideExperience.categories?.map((tag, index) => {
                return <Chip
                  key={index}
                  variant="filled"
                  label={tag}
                />
              })
            }
          </div>
          <div className={`d-flex gap-2`}>
            {
              thankYouSlideExperience.tags?.map((tag, index) => {
                return <Chip
                  key={index}
                  variant="filled"
                  label={tag}
                />
              })
            }
          </div>
          <p className={`mt-3`}>
            {thankYouSlideExperience.text}
          </p>
        </Card>
      </Box>
    </div>

    <ExperienceFooter
      nextButtonText={'Submit'}
      onNext={async () => {
        const {error} = await updateExperienceHideAndPublished({
          experienceID,
          hideExperienceText: !detailedSelected,
          published: true,
        });

        if (error) {
          toast.error(error.message);
          return;
        }

        toast.success('Experience published successfully!', {
          autoClose: 1000,
        });

        navigate(AppRoutes.HOME);
      }}
      previousButtonText={"Back"}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>
}

ThankYouSlide.propTypes = {
  experienceID: PropTypes.number,
  hideText: PropTypes.bool,
  thankYouSlideExperience: PropTypes.object,
};

export default ThankYouSlide;
