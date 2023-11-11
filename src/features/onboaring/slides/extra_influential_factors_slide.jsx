import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import CustomSelect from "../components/custom_select.jsx";

const ExtraInfluentialFactorsSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [profession, setProfession] = useState([]);
  const [migrationResidenceStatus, setMigrationResidenceStatus] = useState([]);
  const [languageProficiency, setLanguageProficiency] = useState([]);
  const [education, setEducation] = useState([]);
  const [professionalLevel, setProfessionalLevel] = useState([]);

  useEffect(() => {
    setAllowNext(false);
    if (profession.length > 0 || migrationResidenceStatus.length > 0 || languageProficiency.length > 0 ||
      education.length > 0 || professionalLevel.length > 0) {
      setAllowNext(true);
    }
  }, [migrationResidenceStatus.length, languageProficiency.length, professionalLevel.length, profession.length, education.length]);

  return <div id={'influential-factors-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>

      <h2 className={`h2 fw-semibold mb-4`}
          style={{
            textAlign: 'center',
          }}
      >
        Are there any other factors from your identity do you believe influenced your experience?
      </h2>

      <p className={`mb-4 h5 fw-medium`}>
        Your tags will help us to map systemic patterns affecting your community.
      </p>

      <Box
        component="form"
        maxWidth={800}
        className={`d-flex flex-wrap align-items-center justify-content-center`}
      >
        <CustomSelect
          title={`Profession`}
          list={['Tech worker', 'Entrepreneurs', 'Linguist', 'Data people', 'Data science teachers', 'Data scientists', 'Mini-jobbers', 'Public Speakers',
            'Job searchers', 'Non-technical but IT', 'PRODUCT MANAGERS', 'People Experience or EX People', 'Data scientists', 'PRODUCT MANAGERS', 'HR people',
            'Engineer', 'IT people', 'Unemployed', 'Consultants', 'STARTUP EMPLOYEES',
          ]}
          greyedList={['Teacher', 'Doctor', 'Engineer', 'Lawyer', 'Accountant']}
          onChange={(value) => {
            setProfession(value);
          }}
          value={profession}
        />
        <CustomSelect
          title={`Migration & Residence Status`}
          list={['EU National', 'Non-EU National', 'Non-German', 'Permanent resident', 'Newcomer', 'Resident', 'Blue Card', 'Work Permit', 'Displaced or Stateless', 'Migrant']}
          greyedList={['Citizen', 'Permanent Resident', 'Temporary Resident', 'Refugee', 'Asylum Seeker', 'Undocumented']}
          onChange={(value) => {
            setMigrationResidenceStatus(value);
          }}
          value={migrationResidenceStatus}
        />
        <CustomSelect
          title={`Language proficiency`}
          list={['Multilingual', 'English-speaker', 'German Level A1', 'German Level A2', 'German Level B1', 'German Level B2', 'Non-German speaker', 'Native English-speaker']}
          greyedList={['Native', 'Fluent', 'Intermediate', 'Basic']}
          onChange={(value) => {
            setLanguageProficiency(value);
          }}
          value={languageProficiency}
        />
        <CustomSelect
          title={`Education`}
          list={['Educated in EU', 'Educated outside of Germany', 'Educated in Germany']}
          greyedList={['High School', 'College', 'University', 'Graduate School']}
          onChange={(value) => {
            setEducation(value);
          }}
          value={education}
        />
        <CustomSelect
          title={`Professional level`}
          list={['Entry level', 'Mid level', 'Senior level', 'Executive', 'Freelancer', 'Business Owner', 'Consultants', 'Startup Founder']}
          greyedList={['Entry', 'Mid', 'Senior', 'Executive']}
          onChange={(value) => {
            setProfessionalLevel(value);
          }}
          value={professionalLevel}
        />
      </Box>

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
  </div>
}

export default ExtraInfluentialFactorsSlide;
