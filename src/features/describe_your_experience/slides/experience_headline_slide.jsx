import ExperienceFooter from "../footer/experience_footer.jsx";
import {Box, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import PropTypes from "prop-types";
import {updateExperienceHeadline} from "../../supabase/database/experience.js";
import {toast} from "react-toastify";

const ExperienceHeadlineSlide = ({
  experienceID,
  savedHeadline,
}) => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [headline, setHeadline] = useState('');

  useEffect(() => {
    setHeadline(savedHeadline ?? '');
    setAllowNext(savedHeadline?.length > 0);
  }, [savedHeadline]);

  return <div id={'experience-headline-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        What would be the headline of this experience?
      </h2>
      <p className={`mb-4 h5 fw-medium`}>
        This response will be visible as quotation.
      </p>
      <p className={`mb-4 h5 fw-normal`}>
        i.e. “Fired twice within six-months of moving to Germany”
      </p>
      <Box
        component="form"
        width={'360px'}
        className={`mt-2`}
      >
        <TextField
          required
          label={'Headline'}
          value={headline}
          type="text"
          id="headline"
          fullWidth={true}
          onChange={(e) => {
            setHeadline(e.target.value);
            setAllowNext(e.target.validity.valid);
          }}
        />
      </Box>
    </div>

    <ExperienceFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={async () => {
        const {error} = await updateExperienceHeadline({
          experienceID,
          headlineText: headline,
        });

        if (error) {
          toast.error(error.message);
          return;
        }

        toast.success('Progress saved!', {
          autoClose: 1000,
        });

        swiper.slideNext();
      }}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>
}

ExperienceHeadlineSlide.propTypes = {
  experienceID: PropTypes.number,
  savedHeadline: PropTypes.string,
};

export default ExperienceHeadlineSlide;
