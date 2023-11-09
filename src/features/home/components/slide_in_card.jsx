import {Card, Slide} from "@mui/material";
import PropTypes from "prop-types";

const SlideInCard = ({
  children,
  slideDirection = 'left',
  slideIn = true,
  className,
  flexGrow = true,
  sx,
  elevation = 0,
}) => {
  return <Slide direction={slideDirection} in={slideIn} mountOnEnter unmountOnExit>
    <Card className={`${className} ${flexGrow ? 'flex-grow-1' : ''}`}
          elevation={elevation}
          style={{
            padding: '20px 30px',
          }}
          sx={sx}
    >
      {children}
    </Card>
  </Slide>;
}

SlideInCard.propTypes = {
  children: PropTypes.node.isRequired,
  slideDirection: PropTypes.string,
  slideIn: PropTypes.bool,
  className: PropTypes.string,
  flexGrow: PropTypes.bool,
  sx: PropTypes.object,
  elevation: PropTypes.number,
}

export default SlideInCard;
