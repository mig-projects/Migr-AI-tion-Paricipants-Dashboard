import {useSwiper, useSwiperSlide} from "swiper/react";
import {useEffect, useRef, useState} from "react";
import variables from "../../../variables.module.scss";
import ExperienceFooter from "../footer/experience_footer.jsx";
import {delay} from "../../../utility_functions.js";
import {Player} from "@lottiefiles/react-lottie-player";
import HourGlass from "../../../assets/animations/hourglass.json";

const ReflectOnExperienceSlide = () => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  const player = useRef(null);
  const [allowNext, setAllowNext] = useState(false);

  useEffect(() => {
    if (swiperSlide.isActive) {
      delay(5000).then(() => {
        setAllowNext(true);
        player.current?.stop();
      });
    }
  }, [swiperSlide.isActive]);

  return <div id={'reflect-on-experience-slide'} className={`d-flex flex-column h-100 align-items-center`}
              style={{
                backgroundColor: variables.backgroundPurple,
              }}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper text-white gap-3'}
         style={{
           maxWidth: '1000px',
           paddingTop: '5vh',
         }}
    >
      <Player
        ref={player}
        autoplay
        loop
        src={HourGlass}
        speed={0.5}
        style={{ height: '200px', width: '200px' }}
      />

      <h2 className={`h2 fw-semibold text-center`}>
        Reflect on the experience that you just described.
      </h2>

      <p className={`text-center fs-5`}>
        Take a minute and think about how organisational factors influenced your experience.
      </p>
    </div>

    <ExperienceFooter
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

export default ReflectOnExperienceSlide;
