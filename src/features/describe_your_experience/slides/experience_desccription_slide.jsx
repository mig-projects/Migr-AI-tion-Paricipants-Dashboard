import ExperienceFooter from "../footer/experience_footer.jsx";
import {Box, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import PropTypes from "prop-types";
import {updateExperienceText} from "../../supabase/database/experience.js";
import {toast} from "react-toastify";

const ExperienceDescriptionSlide = ({
  experienceID,
  savedDescription,
}) => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);
  const [experience, setExperience] = useState('');

  const minExperienceLength = 300;
  const maxExperienceLength = 10000;

  useEffect(() => {
    setExperience(savedDescription ?? '');
  }, [savedDescription]);

  useEffect(() => {
    setAllowNext(experience.length >= minExperienceLength);
  }, [experience]);

  return <div id={'experience-description-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Describe your experience
      </h2>
      <p className={`mb-4 h5 fw-normal text-center`}>
        What exactly happened according to your memory?<br/>
        What was your reaction and what where the consequences?<br/>
        This text won&apos;t be visible to others.
      </p>
      <Box
        component="form"
        width={'700px'}
        className={`mt-2`}
      >
        <TextField
          helperText={`${experience.length}/${maxExperienceLength} characters (min. ${minExperienceLength})`}
          required
          label="Experience"
          value={experience}
          type="text"
          id="experience"
          fullWidth
          multiline
          rows={8}
          onChange={(e) => {
            setExperience(e.target.value);
          }}
        />
      </Box>
    </div>

    <ExperienceFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={async () => {
        const {error} = await updateExperienceText({
          experienceID,
          experienceText: experience,
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

ExperienceDescriptionSlide.propTypes = {
  experienceID: PropTypes.number,
  savedDescription: PropTypes.string,
};

export default ExperienceDescriptionSlide;
