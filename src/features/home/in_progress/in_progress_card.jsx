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

  const [entryFor, setEntryFor] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const maxPoints = 4;

    let progress = 0;
    if (experience.headline) {
      progress += 1;
    }
    if (experience.text) {
      progress += 1;
    }
    if (experience.tags_list.length > 0) {
      progress += 1;
    }
    if (experience.categories_list.length > 0) {
      progress += 1;
    }

    setProgress(progress / maxPoints);
  }, [experience]);

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
                experience.tags_list.length > 0 && <div className={`d-flex flex-wrap gap-2 mb-2`}>
                  {
                    experience.tags_list.map((tag, index) => {
                      return <Chip
                        key={index}
                        className={`fw-semibold`}
                        label={tag}
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
