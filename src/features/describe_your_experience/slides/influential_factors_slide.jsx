import ExperienceFooter from "../footer/experience_footer.jsx";
import {
  Box, Chip, CircularProgress, TextField,
} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import CustomSelect from "../components/custom_select.jsx";
import {fetchTags} from "../../supabase/database/tags.js";
import PropTypes from "prop-types";
import {updateExperienceTags} from "../../supabase/database/experience_tags.js";
import {toast} from "react-toastify";

const InfluentialFactorsSlide = ({
  experienceID,
  savedTagsList,
  savedOtherTagText,
}) => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tagGroups, setTagGroups] = useState({});
  const [selectedTags, setSelectedTags] = useState({});

  const [otherSelected, setOtherSelected] = useState(false);
  const [otherFactor, setOtherFactor] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchTags().then(({data, error}) => {
      if (error) {
        setError(error.message ?? 'Failed to fetch tags!');
      } else {
        const tagGroups = {};
        const selectedTags = {};
        data.forEach((tag) => {
          if (tagGroups[tag.tag_group_name] === undefined) {
            tagGroups[tag.tag_group_name] = [];
          }
          tagGroups[tag.tag_group_name].push({
            id: tag.tag_id,
            name: tag.tag_name,
          });
          if (savedTagsList?.includes(tag.tag_name)) {
            if (selectedTags[tag.tag_group_name] === undefined) {
              selectedTags[tag.tag_group_name] = [];
            }
            selectedTags[tag.tag_group_name].push({
              id: tag.tag_id,
              name: tag.tag_name,
            });
          }
        });
        setTagGroups(tagGroups);
        setSelectedTags(selectedTags);
      }

      setLoading(false);
    });
    
    if (savedOtherTagText) {
      setOtherSelected(true);
      setOtherFactor(savedOtherTagText);
    }
  }, [savedOtherTagText, savedTagsList]);

  useEffect(() => {
    Object.keys(selectedTags).forEach((tagGroup) => {
      selectedTags[tagGroup].length > 0 ? setAllowNext(true) : setAllowNext(false);
    });

    if (otherSelected) {
      setAllowNext(false);
      if (otherFactor.length > 0) {
        setAllowNext(true);
      }
    }
  }, [otherFactor.length, otherSelected, selectedTags]);
  
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

      {
        loading ? <CircularProgress className={`mt-5`}/> :
          error ? <p className={`mt-5`}>{error}</p> :
        <Box
          component="form"
          maxWidth={1200}
          className={`d-flex flex-wrap align-items-center justify-content-center`}
        >
          {
            Object.keys(tagGroups).map((tagGroup) => {
              return <CustomSelect
                key={tagGroup}
                title={tagGroup}
                list={tagGroups[tagGroup]}
                onChange={(value) => {
                  setSelectedTags({
                    ...selectedTags,
                    [tagGroup]: value,
                  });
                }}
                value={
                  selectedTags[tagGroup] === undefined ? [] : selectedTags[tagGroup]
                }
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
            className={`fs-6 p-4 ms-2`}
            sx={{
              height: '58px',
            }}
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
              value={otherFactor}
              type="text"
              id="otherCategory"
              fullWidth={true}
              onChange={(e) => {
                setOtherFactor(e.target.value);
              }}
            />
          </Box>
        </div> :
        <></>
      }
    </div>

    <ExperienceFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={async () => {
        const tagIDsList = [];
        Object.keys(selectedTags).forEach((tagGroup) => {
          selectedTags[tagGroup].forEach((tag) => {
            tagIDsList.push(tag.id);
          });
        });

        const {error} = await updateExperienceTags({
          experienceID,
          tagIDsList,
          otherTagText: otherSelected ? otherFactor : null,
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

InfluentialFactorsSlide.propTypes = {
  experienceID: PropTypes.number,
  savedTagsList: PropTypes.array,
  savedOtherTagText: PropTypes.string,
};

export default InfluentialFactorsSlide;
