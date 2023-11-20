import ExperienceFooter from "../footer/experience_footer.jsx";
import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";

const ExperienceDescriptionSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [experience, setExperience] = useState('');

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
          required
          value={experience}
          type="text"
          id="experience"
          fullWidth
          multiline
          rows={8}
          onChange={(e) => {
            setExperience(e.target.value);
            setAllowNext(e.target.textLength > 10);
          }}
        />
      </Box>
    </div>

    <ExperienceFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={() => {
        swiper.slideNext();
      }}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>
}

export default ExperienceDescriptionSlide;
