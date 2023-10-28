import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box, Card, Chip} from "@mui/material";
import variables from "../../../variables.module.scss";

const ThankYouSlide = () => {
  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
              style={{
                backgroundColor: variables.primaryPurple,
              }}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-3 text-white`}>
        Thank you for speaking out.
      </h2>
      <p className={`mb-4 h5 fw-normal text-white`}>
        This is your Contributor Data Card, you can now publish it to the HR Bias Context Explorer.
      </p>
      <Box
        component="form"
        width={'700px'}
      >
        <Card className={`py-4 px-5`}>
          <p className={`fs-2 fw-bold`}>“Fired twice within 6 months of moving to Germany”</p>
          <p className={`fs-5 fw-medium`}>Category</p>
          <p className={`fs-6 fw-normal`}>Relevant tags</p>
          <div className={`d-flex gap-2 mt-4 mb-3`}>
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
      </Box>
    </div>

    <OnboardingFooter
      nextButtonText={'Submit Now'}
      onNext={() => {

      }}
      previousButtonText={"I'll do it later"}
      onPrevious={() => {

      }}
    />
  </div>
}

export default ThankYouSlide;
