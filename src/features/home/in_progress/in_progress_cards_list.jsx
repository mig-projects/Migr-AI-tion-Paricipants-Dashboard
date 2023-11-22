import InProgressCard from "./in_progress_card.jsx";
import PropTypes from "prop-types";
import SlideInCard from "../components/slide_in_card.jsx";
import {Typography} from "@mui/material";
import {AppRoutes} from "../../../App.jsx";
import CustomChip from "../components/custom_chip.jsx";
import {useNavigate} from "react-router-dom";

const InProgressCardsList = ({
  experiences,
}) => {
  const navigate = useNavigate();

  if (experiences.length === 0) {
    return <SlideInCard>
      <div
        className={`d-flex flex-column justify-content-center gap-3 align-items-center h-100`}
      >
        <Typography>
          You have no entries yet.
        </Typography>
        <CustomChip
          text={'+ Add New Entry'}
          selected={false}
          onClick={() => {
            navigate(AppRoutes.DESCRIBE_YOUR_EXPERIENCE);
          }}
        />
      </div>
    </SlideInCard>;
  }

  return <div className={`flex-grow-1 d-flex flex-column h-100`}
    style={{
      gap: '20px',
      paddingBottom: '30px',
    }}
  >
    {
      experiences.map((experience) => {
        return <InProgressCard
          key={experience.id}
          experience={experience}
        />
      })
    }
  </div>
}

InProgressCardsList.propTypes = {
  experiences: PropTypes.array,
}

export default InProgressCardsList;
