import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";

const ExperienceHeadlineSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [headline, setHeadline] = useState('');

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
        Ex. “Fired twice within 6 months of moving to Germany.”
      </p>
      <Box
        component="form"
        width={'360px'}
      >
        <TextField
          required
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

    <OnboardingFooter
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

export default ExperienceHeadlineSlide;
