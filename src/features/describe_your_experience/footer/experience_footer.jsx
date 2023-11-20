import styles from './experience_footer.module.scss';
import PropTypes from "prop-types";
import CustomButton from "../../../components/buttons/custom_button.jsx";

const ExperienceFooter = ({
  showOnlyOne,
  nextButtonText,
  previousButtonText,
  onNext,
  onPrevious,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  return <div
    className={`${styles.footer}`}
    style={{
      backgroundColor: 'white',
    }}
  >
    <div className={`${styles.footerButtons}`}>
      {
        showOnlyOne ?
          <CustomButton
            text={nextButtonText ?? previousButtonText}
            onClick={onNext ?? onPrevious}
            disabled={isNextDisabled ?? isPreviousDisabled}
          />
          :
          <div className={`d-flex gap-2`}>
            <CustomButton
              variant={'outlined'}
              text={previousButtonText}
              onClick={onPrevious}
              disabled={isPreviousDisabled}
            />
            <CustomButton
              text={nextButtonText}
              onClick={onNext}
              disabled={isNextDisabled}
            />
          </div>
      }


    </div>
  </div>
}

ExperienceFooter.propTypes = {
  showOnlyOne: PropTypes.bool,
  nextButtonText: PropTypes.string,
  previousButtonText: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  isPreviousDisabled: PropTypes.bool,
  isNextDisabled: PropTypes.bool,
}

export default ExperienceFooter;
