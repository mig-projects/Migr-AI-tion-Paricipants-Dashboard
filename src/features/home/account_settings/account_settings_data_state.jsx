import PropTypes from "prop-types";
import {IconButton, Link, Typography} from "@mui/material";
import {ArrowBack, GppMaybeOutlined} from "@mui/icons-material";
import SlideInCard from "../components/slide_in_card.jsx";
import {toast} from "react-toastify";

const AccountSettingsDataState = ({
  onBack,
}) => {
  return <SlideInCard>
    <div className={`d-flex flex-column gap-3 h-100`}
         style={{
           maxWidth: '800px',
         }}
    >
      <div className={`d-flex align-items-center gap-2 mb-4`}>
        <IconButton onClick={onBack}>
          <ArrowBack />
        </IconButton>
        <Typography className={`fs-5 fw-semibold`}>
          My data
        </Typography>
      </div>

      <div className={`ms-3 d-flex flex-column gap-2`}>
        <Link className={`text-black text-decoration-underline`}
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => {
                toast.info('Not Implemented yet!', {
                  autoClose: 1000,
                });
              }}
        >
          Request a copy of my Data
        </Link>

        <Link className={`text-decoration-none`} sx={{
          color: 'red',
          cursor: 'pointer',
        }}
              onClick={() => {
                toast.info('Not Implemented yet!', {
                  autoClose: 1000,
                });
              }}
        >
          Permanently delete my data <GppMaybeOutlined />
        </Link>
      </div>

    </div>
  </SlideInCard>;
}

AccountSettingsDataState.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default AccountSettingsDataState;
