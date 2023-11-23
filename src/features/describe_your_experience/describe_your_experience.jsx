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
import ExperienceHeader from "./header/experience_header.jsx";
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
  const {experience} = location.state || {};

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  const [experienceID, setExperienceID] = useState(null);

  useEffect(() => {
    if (experience) {
      setExperienceID(experience.id);
    }
  }, [experience]);

  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(1);

  return <div id={'describe_your_experience'}
              className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <ExperienceHeader
      currentStep={currentStep}
      totalSteps={totalSteps}
    />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <Swiper
      initialSlide={0}
      onSlideChange={(swiper) => {
        setCurrentStep(swiper.activeIndex + 1);
        setOnboardingProgress((swiper.activeIndex + 1) * (100 / swiper.slides.length));
      }}
      onSwiper={(swiper) => {
        setTotalSteps(swiper.slides.length);
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
        experience == null && <SwiperSlide className={`swiper-slide`}>
          <WhoIsThisExperienceForSlide />
        </SwiperSlide>
      }
      <SwiperSlide className={`swiper-slide`}>
        <DiscriminationNameSlide
          experienceID={experienceID}
          setExperienceID={setExperienceID}
          selectedDiscriminationNames={experience?.discrimination_names_list}
          isFirstSlide={experience !== null || true}
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
          savedOtherCategoryText={experience?.other_category_text}
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

export default DescribeYourExperience;
