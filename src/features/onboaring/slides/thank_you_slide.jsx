import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box, Card, Chip} from "@mui/material";
import variables from "../../../variables.module.scss";
import {useSwiper} from "swiper/react";
import {useNavigate} from "react-router-dom";

const ThankYouSlide = () => {
  const swiper = useSwiper();
  const navigate = useNavigate();

  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
              style={{
                backgroundColor: variables.backgroundPurple,
              }}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-3 text-white`}>
        Thank you for speaking out.
      </h2>
      <p className={`mb-5 h5 fw-normal text-white`}>
        Your Contributor Card is ready, select the one you would like to share in a Public Dashboard.
      </p>
      <Box
        component="form"
        className={`d-flex gap-5 mb-5 align-items-start`}
      >
        <Card className={`py-4 px-5`}
          style={{
            backgroundColor: '#dfd4f2',
            boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.25)',
          }}
        >
          <p className={`fs-2 fw-bold`}>“Fired twice within 6 months of moving to Germany”</p>
          <p className={`fs-5 fw-medium`}>Category</p>
          <p className={`fs-6 fw-normal`}>Relevant tags</p>
          <div className={`d-flex gap-2 mt-4 mb-2`}>
            {
              ['women', 'women', 'women'].map((tag, index) => {
                return <Chip
                  key={index}
                  variant="filled"
                  label={tag}
                />
              })
            }
          </div>
        </Card>

        <Card className={`py-4 px-5`}
              style={{
                backgroundColor: '#dfd4f2',
                boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.25)',
              }}
        >
          <p className={`fs-2 fw-bold`}>“Fired twice within 6 months of moving to Germany”</p>
          <p className={`fs-5 fw-medium`}>Category</p>
          <p className={`fs-6 fw-normal`}>Relevant tags</p>
          <div className={`d-flex gap-2 mt-4 mb-2`}>
            {
              ['women', 'women', 'women'].map((tag, index) => {
                return <Chip
                  key={index}
                  variant="filled"
                  label={tag}
                />
              })
            }
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue urna molestie diam a dignissim ut. Consequat quis blandit condimentum non nibh. Mi velit urna nulla pretium sit platea tellus cursus est....
          </p>
        </Card>
      </Box>
    </div>

    <OnboardingFooter
      nextButtonText={'Submit'}
      onNext={() => {
        navigate('/');
      }}
      previousButtonText={"Back"}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>
}

export default ThankYouSlide;
