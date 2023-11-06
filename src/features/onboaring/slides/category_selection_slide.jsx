import {useSwiper} from "swiper/react";
import {useState} from "react";
import {Box, Chip} from "@mui/material";
import OnboardingFooter from "../footer/onboarding_footer.jsx";

const CategorySelectionSlide = () => {
  const swiper = useSwiper();

  const categories = ['Company Values & Exploitation', 'Discrimination in HR', 'Other', 'Cross-cultural Communication', 'Migration Journey', 'Psychological burden', 'Bureaucratic Barriers and Misalignment'];
  const [selectedCategory, setSelectedCategory] = useState(categories.at(0));

  return <div id={'category-selection-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Which Category does this experience relates to?
      </h2>
      <Box
        className={`d-flex flex-wrap gap-3 justify-content-center`}
      >
        {
          categories.map((category, index) => {
            return <Chip
              key={index}
              label={category}
              variant={'filled'}
              color={selectedCategory === category ? 'primary' : 'secondary'}
              value={category}
              onClick={() => {
                setSelectedCategory(category);
              }}
              className={`fs-5 p-4`}
            />
          })
        }
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

export default CategorySelectionSlide;
