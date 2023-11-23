import ExperienceFooter from "../footer/experience_footer.jsx";
import {Autocomplete, Box, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import PropTypes from "prop-types";
import {insertNewExperience} from "../../supabase/database/experience.js";
import {toast} from "react-toastify";
import {updateExperienceDiscriminationNames} from "../../supabase/database/experience_discrimination_names.js";

const DiscriminationNameSlide = ({
  experienceID,
  setExperienceID,
  selectedDiscriminationNames,
}) => {
  const swiper = useSwiper();

  const [discriminationNameList, setDiscriminationNameList] = useState([]);
  const discriminationNameOptions = [
    'Aegism',
    'Sexism',
    'Racism',
    'Homophobia',
  ];
  
  useEffect(() => {
    if (selectedDiscriminationNames) {
      setDiscriminationNameList(selectedDiscriminationNames);
    }
  }, [selectedDiscriminationNames]);

  return <div id={'discrimination-name-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Does this type of discrimination have a name? (Optional)
      </h2>
      <p className={`mb-4 h5 fw-normal`}>
        e.g. ageism or sexism
      </p>
      <Box
        maxWidth={'700px'}
        minWidth={'360px'}
        className={`mt-2`}
      >
        <Autocomplete
          multiple
          freeSolo
          value={discriminationNameList}
          id="discrimination-name"
          options={discriminationNameOptions}
          onChange={(event, newValue) => {
            setDiscriminationNameList(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={discriminationNameList.length === 0 ? 'Search or Create your own tags' : null}
              variant="outlined"
              helperText={'You can either select from the list or type in your own and press enter.'}
            />
          )}
        />
      </Box>
    </div>

    <ExperienceFooter
      nextButtonText={'Next'}
      onNext={async () => {
        if (experienceID) {
          const {error} = await updateExperienceDiscriminationNames({
            experienceID,
            discriminationNameList,
          });

          if (error) {
            toast.error(error.message);
            return;
          }
        } else {
          const {data, error} = await insertNewExperience({
            discriminationNameList,
          });
          setExperienceID(data[0].id);
          if (error) {
            toast.error(error.message);
            return;
          }
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

DiscriminationNameSlide.propTypes = {
  experienceID: PropTypes.number,
  setExperienceID: PropTypes.func,
  selectedDiscriminationNames: PropTypes.array,
};

export default DiscriminationNameSlide;
