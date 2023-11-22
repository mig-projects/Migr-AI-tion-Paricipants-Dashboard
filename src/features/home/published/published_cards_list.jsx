import PublishedCard from "./published_card.jsx";
import {useNavigate} from "react-router-dom";
import SlideInCard from "../components/slide_in_card.jsx";
import {Typography} from "@mui/material";
import CustomChip from "../components/custom_chip.jsx";
import {AppRoutes} from "../../../App.jsx";
import PropTypes from "prop-types";

const PublishedCardsList = ({
  experiences,
  refreshFunction,
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
      experiences.map((experience, index) => {
        return <PublishedCard
          showBiasExplorerText={index === 0}
          key={experience.id}
          title={experience.headline}
          subtitle={experience.text}
          tags={experience.tags}
        />
      })
    }
  </div>
}

PublishedCardsList.propTypes = {
  experiences: PropTypes.array,
  refreshFunction: PropTypes.func,
}

export default PublishedCardsList;
