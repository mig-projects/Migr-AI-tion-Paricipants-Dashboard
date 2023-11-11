import {useSwiper, useSwiperSlide} from "swiper/react";
import {useEffect, useState} from "react";
import variables from "../../../variables.module.scss";
import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {delay} from "../../../utility_functions.js";
import { Player } from '@lottiefiles/react-lottie-player';
import HourGlass from "../../../assets/animations/hourglass.json";

const TakeABreakSlide = () => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  const [allowNext, setAllowNext] = useState(false);

  useEffect(() => {
    if (swiperSlide.isActive) {
      delay(5000).then(() => {
        setAllowNext(true);
      });
    }
  }, [swiperSlide.isActive]);

  return <div id={'take-a-break-slide'} className={`d-flex flex-column h-100 align-items-center`}
              style={{
                backgroundColor: variables.backgroundPurple,
              }}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper text-white gap-3'}
         style={{
           maxWidth: '1000px',
         }}
    >
      <Player
        autoplay
        loop
        src={HourGlass}
        speed={0.5}
        style={{ height: '200px', width: '200px' }}
      />

      <h2 className={`h2 fw-semibold text-center`}>
        Think about the experience you want to describe, who was affected and what were the feelings associated?
      </h2>

      <p className={`text-center`}>
        Discrimination isn’t just about interpersonal prejudices and interactions.
        It can be experienced as exceptional challenges or systemic barriers based on particular aspects
        of a person’s identity. Sometimes one type of discrimination can also be masked by
        another form of discrimination.
      </p>
    </div>

    <OnboardingFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={() => {
        swiper.slideNext();
      }}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>;
}

export default TakeABreakSlide;
