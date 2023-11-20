import {useSwiper} from "swiper/react";
import {useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import ExperienceFooter from "../footer/experience_footer.jsx";

const WhoIsThisExperienceForSlide = () => {
  const swiper = useSwiper();

  const [forMyself, setForMyself] = useState(null);

  const checkBoxStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '8px',
    marginInlineEnd: '0px',
  };

  return <div id={'who-is-this-experience-for-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Let’s begin. Who’s experience are you describing?
      </h2>

      <p className={`mb-4 h5 fw-normal`}>
        Your contribution will stay anonymous.
      </p>

      <div className={`d-flex flex-column gap-3 mt-2`}
        style={{
          minWidth: '360px',
        }}
      >
        <FormControlLabel
          style={checkBoxStyle}
          control={<Checkbox
            checked={forMyself === true}
            onChange={() => {
              setForMyself(true);
            }}
          />}
          label="It’s about myself"
        />
        <FormControlLabel
          style={checkBoxStyle}
          control={<Checkbox
            checked={forMyself === false}
            onChange={() => {
              setForMyself(false);
            }}
          />}
          label="It’s about someone close to me"
        />
      </div>
    </div>

    <ExperienceFooter
      nextButtonText={'Next'}
      isNextDisabled={forMyself === null}
      onNext={() => {
        swiper.slideNext();
      }}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>
}

export default WhoIsThisExperienceForSlide;
