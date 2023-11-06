import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Autocomplete, Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";

const ExtraInfluentialFactorsSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [influentialFactors, setInfluentialFactors] = useState([]);
  const [otherFactors, setOtherFactors] = useState('');

  const influentialFactorsOptions = [
    'Mothers',
    'Fathers',
    'Males',
    'Migrants',
  ];

  return <div id={'influential-factors-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}
          style={{
            textAlign: 'center',
          }}
      >
        Which factors from your intersectional identity do you believe influenced your experience?
      </h2>
      <p className={`mb-4 h5 fw-medium`}>
        Your tags will help us to map systemic patterns affecting your community.
      </p>
      <Box
        component="form"
        width={'700px'}
      >
        <Autocomplete
          multiple
          id="influential-factors"
          options={influentialFactorsOptions}
          onChange={(event, newValue) => {
            setInfluentialFactors(newValue);
            setAllowNext(newValue.length > 0);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
            />
          )}
        />
      </Box>

      <p className={`my-4 h5 fw-normal text-center`}>
        Discrimination is often opaque and hidden within layers. Which other factors regarding your identity may have influenced your experience, that you&apos;re not sure about?
      </p>

      <Box
        component="form"
        width={'700px'}
      >
        <TextField
          value={otherFactors}
          type="text"
          id="otherFactors"
          fullWidth={true}
          onChange={(e) => {
            setOtherFactors(e.target.value);
          }}
        />
      </Box>
    </div>

    <OnboardingFooter
      nextButtonText={'Review'}
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

export default ExtraInfluentialFactorsSlide;
