import SlideInCard from "../components/slide_in_card.jsx";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Chip, IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";
import {
  ArrowDropDown, DeleteOutlined, EditOutlined,
} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchExperienceTags} from "../../supabase/database/experience_tags.js";
import {PulseLoader} from "react-spinners";
import {fetchExperienceCategories} from "../../supabase/database/experience_categories.js";

const InProgressCard = ({
  experience,
}) => {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 20,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#d9d9d9',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 20,
      backgroundColor: '#ac88ee',
    },
  }));

  const iconButtonStyle = {
    border: '1px solid #E7E7E7',
    borderRadius: '8px',
    boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.02)'
  };

  const navigate = useNavigate();
  
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [entryFor, setEntryFor] = useState(null);
  const [progress, setProgress] = useState(0);

  const [loadingTags, setLoadingTags] = useState(false);
  const [tagsError, setTagsError] = useState(null);

  const calculateProgress = () => {
    const maxPoints = 4;

    let progress = 0;
    if (experience.headline) {
      progress += 1;
    }
    if (experience.text) {
      progress += 1;
    }
    if (tags.length > 0) {
      progress += 1;
    }
    if (categories.length > 0) {
      progress += 1;
    }

    setProgress(progress / maxPoints);
  }

  useEffect(() => {
    calculateProgress();
  }, [tags, categories, experience.id]);

  const fetchTagsAndCategories = async () => {
    setLoadingTags(true);
    setTagsError(null);
    await fetchExperienceTags({
      experienceID: experience.id,
    }).then(({data, error}) => {
      if (error) {
        setTagsError(error);
      } else {
        setTags(data.map((tag) => ({
          id: tag.tag_id,
          name: tag.tags.name,
        })));
      }

      setLoadingTags(false);
    });

    await fetchExperienceCategories({
      experienceID: experience.id,
    }).then(({data, error}) => {
      if (error) { /* empty */ } else {
        setCategories(data.map((category) => ({
          id: category.category_id,
          name: category.categories.name,
        })));
      }
    });
  }

  useEffect(() => {
    fetchTagsAndCategories().then(() => {});
  }, [experience.id]);

  return <SlideInCard>
    <div className={`d-flex flex-column gap-2`}>
      {
        entryFor && <Typography className={`fs-5 fw-semibold`}
                                  style={{
                                    color: '#7438E2',
                                  }}
        >
          {entryFor} Entry
        </Typography>
      }

      <div className={`d-flex gap-3 align-items-center`}>
        <BorderLinearProgress
          variant="determinate" value={progress * 100}
          sx={{
            width: '20vw'
          }}
        />

        <Typography className={`fw-semibold`}>
          {progress * 100}% Complete
        </Typography>
      </div>

      {
        progress < 1 && <Typography className={`mt-2`}>
          We are missing some information. Add annotations, tags and more.
        </Typography>
      }

      <div className={`d-flex align-items-start gap-4 mt-3`}>
        <div
          className={`flex-grow-1`}
          style={{
            padding: '20px 10px',
            border: '1px solid #E7E7E7',
            borderRadius: '8px',
            boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.02)'
          }}
        >
          <Accordion TransitionProps={{ unmountOnExit: true }}
                     elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDown />}
            >
              <Typography className={`fw-bold fs-2`}
                sx={{
                  color: '#141145',
                }}
              >
                {`"${experience.headline}"`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              className={`d-flex flex-column gap-2`}
            >
              {
                loadingTags ? <PulseLoader size={7} /> :
                tagsError ? <Typography sx={{
                  fontSize: '12px'}}
                  className={`fst-italic`}
                  >
                  Error loading tags - {tagsError}
                </Typography> :
                tags.length > 0 && <div className={`d-flex flex-wrap gap-2 mb-2`}>
                  {
                    tags.map((tag, index) => {
                      return <Chip
                        key={index}
                        className={`fw-semibold`}
                        label={tag.name}
                      />
                    })
                  }
                </div>
              }

              <Typography>
                {experience.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className={`d-flex gap-2`}>
          <IconButton
            sx={iconButtonStyle}
            onClick={() => {
              navigate('/describe_your_experience', { state: { withoutSignup: true } });
            }}
          >
            <EditOutlined />
          </IconButton>

          <IconButton
            sx={iconButtonStyle}
          >
            <DeleteOutlined />
          </IconButton>
        </div>
      </div>

    </div>
  </SlideInCard>
}

InProgressCard.propTypes = {
  experience: PropTypes.object,
};

export default InProgressCard;
