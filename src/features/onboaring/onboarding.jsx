import OnboardingHeader from "./header/onboarding_header.jsx";
import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import WelcomeSlide from "./slides/welcome_slide.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss';
import './onboarding.scss';
import AddEmailSlide from "./slides/add_email_slide.jsx";
import CreatePasswordSlide from "./slides/create_password_slide.jsx";
import CategorySelectionSlide from "./slides/category_selection_slide.jsx";
import ExperienceDescriptionSlide from "./slides/experience_desccription_slide.jsx";
import DiscriminationNameSlide from "./slides/discrimination_name_slide.jsx";
import ExperienceHeadlineSlide from "./slides/experience_headline_slide.jsx";
import InfluentialFactorsSlide from "./slides/influential_factors_slide.jsx";
import ThankYouSlide from "./slides/thank_you_slide.jsx";
import TakeABreakSlide from "./slides/take_a_break_slide.jsx";
import WhoIsThisExperienceForSlide from "./slides/who_is_this_experience_for_slide.jsx";
import ExtraInfluentialFactorsSlide from "./slides/extra_influential_factors_slide.jsx";
import ReflectOnExperienceSlide from "./slides/reflect_on_experience_slide.jsx";

const Onboarding = () => {
  const [onboardingProgress, setOnboardingProgress] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  return <div id={'onboarding'}
              className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <OnboardingHeader />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <Swiper
      initialSlide={6}
      onSlideChange={(swiper) => {
        setOnboardingProgress((swiper.activeIndex + 1) * (100 / swiper.slides.length));
      }}
      onSwiper={(swiper) => {
        setOnboardingProgress((swiper.activeIndex + 1) * (100 / swiper.slides.length));
      }}
      allowTouchMove={false}
      slidesPerView={1}
      spaceBetween={0}
      className={'h-100 w-100'}
      style={{
        backgroundColor: '#f2f1f5',
      }}
    >
      <SwiperSlide className={`swiper-slide`}>
        <WelcomeSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <AddEmailSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <CreatePasswordSlide />
      </SwiperSlide>

      <SwiperSlide className={`swiper-slide`}>
        <TakeABreakSlide />
      </SwiperSlide>

      <SwiperSlide className={`swiper-slide`}>
        <WhoIsThisExperienceForSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <DiscriminationNameSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <InfluentialFactorsSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <ExperienceDescriptionSlide />
      </SwiperSlide>

      <SwiperSlide className={`swiper-slide`}>
        <ReflectOnExperienceSlide />
      </SwiperSlide>

      <SwiperSlide className={`swiper-slide`}>
        <CategorySelectionSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <ExperienceHeadlineSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <ExtraInfluentialFactorsSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <ThankYouSlide />
      </SwiperSlide>
    </Swiper>
  </div>
}

export default Onboarding;
