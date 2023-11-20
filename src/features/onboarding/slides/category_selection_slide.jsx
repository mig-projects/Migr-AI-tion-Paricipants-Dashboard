import {useSwiper} from "swiper/react";
import {useEffect, useState} from "react";
import {Box, Chip, TextField} from "@mui/material";
import OnboardingFooter from "../footer/onboarding_footer.jsx";

const CategorySelectionSlide = () => {
  const swiper = useSwiper();

  const [allowNext, setAllowNext] = useState(false);

  const categories = ['Company Values & Exploitation', 'Discrimination in HR', 'Other', 'Cross-cultural Communication', 'Migration Journey', 'Psychological burden', 'Bureaucratic Barriers and Misalignment'];
  const [selectedCategories, setSelectedCategories] = useState([categories.at(0)]);
  const [otherCategory, setOtherCategory] = useState('');

  useEffect(() => {
    setAllowNext(false);
    if (selectedCategories.length > 0) {
      if (selectedCategories.includes('Other')) {
        if (otherCategory.length > 0) {
          setAllowNext(true);
        }
      } else {
        setAllowNext(true);
      }
    }
  }, [selectedCategories, otherCategory]);

  return <div id={'category-selection-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Which research category does this experience relates to?
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
              color={selectedCategories.includes(category) ? 'primary' : 'secondary'}
              value={category}
              onClick={() => {
                if (selectedCategories.includes(category)) {
                  setSelectedCategories(selectedCategories.filter((selectedCategory) => {
                    return selectedCategory !== category;
                  }));
                } else {
                  setSelectedCategories([...selectedCategories, category]);
                }
              }}
              className={`fs-5 p-4`}
            />
          })
        }
      </Box>

      {selectedCategories.includes('Other') ?
        <div className={`d-flex flex-column align-items-center`}>
          <p className={`mt-4`}>
            Describe “Other”
          </p>
          <Box
            component="form"
            width={'360px'}
            className={`mt-2`}
          >
            <TextField
              value={otherCategory}
              type="text"
              id="otherCategory"
              fullWidth={true}
              onChange={(e) => {
                setOtherCategory(e.target.value);
              }}
            />
          </Box>
        </div> :
        <></>
      }

    </div>

    <OnboardingFooter
      isNextDisabled={!allowNext}
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
