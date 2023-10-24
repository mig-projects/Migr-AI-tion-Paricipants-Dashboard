import {BottomNavigation, Button} from "@mui/material";
import styles from './onboarding_footer.module.scss';
import PropTypes from "prop-types";

const OnboardingFooter = ({
  showOnlyOne,
  nextButtonText,
  previousButtonText,
  onNext,
  onPrevious,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  return <BottomNavigation
    className={`${styles.footer}`}
  >
    <div className={`${styles.footerButtons}`}>
      {
        showOnlyOne ?
          <Button
            variant={'contained'}
            size={'large'}
            style={{
              width: '100%',
            }}
            onClick={onNext ?? onPrevious}
            disabled={isNextDisabled ?? isPreviousDisabled}
          >
            {nextButtonText ?? previousButtonText}
          </Button>
          :
          <div className={`d-flex gap-3`}>
            <Button
              variant={'contained'}
              size={'large'}
              style={{
                width: '100%',
              }}
              onClick={onPrevious}
              disabled={isPreviousDisabled}
            >
              {previousButtonText}
            </Button>
            <Button
              variant={'contained'}
              size={'large'}
              style={{
                width: '100%',
              }}
              onClick={onNext}
              disabled={isNextDisabled}
            >
              {nextButtonText}
            </Button>
          </div>
      }


    </div>
  </BottomNavigation>
}

OnboardingFooter.propTypes = {
  showOnlyOne: PropTypes.bool,
  nextButtonText: PropTypes.string,
  previousButtonText: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  isPreviousDisabled: PropTypes.bool,
  isNextDisabled: PropTypes.bool,
}

export default OnboardingFooter;
