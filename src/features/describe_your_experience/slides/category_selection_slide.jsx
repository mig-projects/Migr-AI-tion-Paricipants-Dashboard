import {useSwiper} from "swiper/react";
import {useEffect, useState} from "react";
import {Box, Chip, CircularProgress, TextField} from "@mui/material";
import ExperienceFooter from "../footer/experience_footer.jsx";
import {fetchCategories} from "../../supabase/database/categories.js";
import PropTypes from "prop-types";
import {updateExperienceCategories} from "../../supabase/database/experience_categories.js";
import {toast} from "react-toastify";

const CategorySelectionSlide = ({
  experienceID,
  savedCategoriesList, 
  savedOtherCategoryText,
}) => {
  const swiper = useSwiper();

  const [allowNext, setAllowNext] = useState(false);
  const [otherSelected, setOtherSelected] = useState(false);
  const [otherCategory, setOtherCategory] = useState('');

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCategories().then(({data, error}) => {
      if (error) {
        setError(error.message);
      } else {
        setCategories(data);
        if (savedCategoriesList) {
          setSelectedCategories(data.filter((category) => {
            return savedCategoriesList.includes(category.name);
          }));
        } else {
          setSelectedCategories([data[0]]);
        }
      }

      setLoading(false);
    });
  }, [savedCategoriesList]);
  
  useEffect(() => {
    if (savedOtherCategoryText) {
      setOtherSelected(true);
      setOtherCategory(savedOtherCategoryText);
    }
  }, [savedOtherCategoryText]);

  useEffect(() => {
    setAllowNext(false);
    if (selectedCategories.length > 0) {
      if (otherSelected) {
        if (otherCategory.length > 0) {
          setAllowNext(true);
        }
      } else {
        setAllowNext(true);
      }
    }
  }, [selectedCategories, otherCategory, otherSelected]);

  return <div id={'category-selection-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Which research category does this experience relates to?
      </h2>
      {
        loading ? <CircularProgress className={`mt-5`}/> :
          error ? <p className={`mt-5`}>{error}</p> :
        <Box
          className={`d-flex flex-wrap gap-3 justify-content-center`}
        >
          {
            categories.map((category) => {
              return <Chip
                key={category.id}
                label={category.name}
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
          <Chip
            label={'Other'}
            variant={'filled'}
            color={otherSelected ? 'primary' : 'secondary'}
            onClick={() => {
              setOtherSelected(!otherSelected);
            }}
            className={`fs-5 p-4`}
          />
        </Box>
      }

      {otherSelected ?
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

    <ExperienceFooter
      isNextDisabled={!allowNext}
      nextButtonText={'Next'}
      onNext={async () => {
        const categoryIDsList = selectedCategories.map((category) => {
          return category.id;
        });

        const {error} = await updateExperienceCategories({
          experienceID,
          categoryIDsList,
          otherCategoryText: otherSelected ? otherCategory : null,
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

CategorySelectionSlide.propTypes = {
  experienceID: PropTypes.number,
  savedCategoriesList: PropTypes.array,
};

export default CategorySelectionSlide;
