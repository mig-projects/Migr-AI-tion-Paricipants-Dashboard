import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Autocomplete, Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";

const DiscriminationNameSlide = () => {
  const swiper = useSwiper();

  const [discriminationName, setDiscriminationName] = useState(null);
  const discriminationNameOptions = [
    'Aegism',
    'Sexism',
    'Racism',
    'Homophobia',
  ];

  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Does this type of discrimination has a name? (Optional)
      </h2>
      <p className={`mb-4 h5 fw-normal`}>
        For example “Ageism” Sexism”
      </p>
      <Box
        maxWidth={'700px'}
        minWidth={'360px'}
      >
        <Autocomplete
          multiple
          id="discrimination-name"
          options={discriminationNameOptions}
          onChange={(event, newValue) => {
            setDiscriminationName(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
            />
          )}
        />
      </Box>
    </div>

    <OnboardingFooter
      nextButtonText={'Next'}
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

export default DiscriminationNameSlide;