import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import CategorySelectionSlide from "./slides/category_selection_slide.jsx";
import ExperienceDescriptionSlide from "./slides/experience_desccription_slide.jsx";
import DiscriminationNameSlide from "./slides/discrimination_name_slide.jsx";
import ExperienceHeadlineSlide from "./slides/experience_headline_slide.jsx";
import InfluentialFactorsSlide from "./slides/influential_factors_slide.jsx";
import ThankYouSlide from "./slides/thank_you_slide.jsx";
import WhoIsThisExperienceForSlide from "./slides/who_is_this_experience_for_slide.jsx";
import ReflectOnExperienceSlide from "./slides/reflect_on_experience_slide.jsx";
import variables from '../../variables.module.scss';
import PropTypes from "prop-types";
import ExperienceHeader from "./header/experience_header.jsx";
import TakeABreakSlide from "../onboarding/slides/take_a_break_slide.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {isUserSignedIn} from "../supabase/authentication.js";
import {AppRoutes} from "../../App.jsx";

const DescribeYourExperience = () => {
  const navigate = useNavigate();

  useEffect(() => {
    isUserSignedIn().then((signedIn) => {
      if (!signedIn) {
        navigate(AppRoutes.SIGN_IN);
      }
    });
  }, [navigate]);

  const [onboardingProgress, setOnboardingProgress] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);

  const location = useLocation();
  const {freshSignup} = location.state || {};
  const {experience} = location.state || {};

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  const [experienceID, setExperienceID] = useState(null);

  return <div id={'describe_your_experience'}
              className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <ExperienceHeader />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <Swiper
      initialSlide={7}
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
        backgroundColor: variables.backgroundColor,
      }}
    >
      {
        freshSignup && <SwiperSlide className={`swiper-slide`}>
          <TakeABreakSlide />
        </SwiperSlide>
      }

      <SwiperSlide className={`swiper-slide`}>
        <WhoIsThisExperienceForSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <DiscriminationNameSlide
          experienceID={experienceID}
          setExperienceID={setExperienceID}
          selectedDiscriminationNames={experience?.discrimination_names_list}
        />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <InfluentialFactorsSlide
          experienceID={experienceID}
          savedTagsList={experience?.tags_list}
          savedOtherTagText={experience?.other_tag_text}
        />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <ExperienceDescriptionSlide
          experienceID={experienceID}
          savedDescription={experience?.text}
        />
      </SwiperSlide>

      <SwiperSlide className={`swiper-slide`}>
        <ReflectOnExperienceSlide />
      </SwiperSlide>

      <SwiperSlide className={`swiper-slide`}>
        <CategorySelectionSlide
          experienceID={experienceID}
          savedCategoriesList={experience?.categories_list}

        />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <ExperienceHeadlineSlide
          experienceID={experienceID}
          savedHeadline={experience?.headline}
        />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <ThankYouSlide
          experienceID={experienceID}
          hideText={experience?.hide_text}
        />
      </SwiperSlide>
    </Swiper>
  </div>
}

DescribeYourExperience.propTypes = {
  withSignup: PropTypes.bool,
}

export default DescribeYourExperience;
