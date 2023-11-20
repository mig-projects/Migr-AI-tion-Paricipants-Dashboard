import ExperienceFooter from "../footer/experience_footer.jsx";
import {
  Box,
} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import CustomSelect from "../components/custom_select.jsx";

const InfluentialFactorsSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [gender, setGender] = useState([]);
  const [age, setAge] = useState([]);
  const [disability, setDisability] = useState([]);
  const [ethnicity, setEthnicity] = useState([]);
  const [religion, setReligion] = useState([]);
  const [sexuality, setSexuality] = useState([]);
  const [familyStatus, setFamilyStatus] = useState([]);
  const [profession, setProfession] = useState([]);
  const [professionalLevel, setProfessionalLevel] = useState([]);

  useEffect(() => {
    setAllowNext(false);
    if (gender.length > 0 || age.length > 0 || disability.length > 0 ||
        ethnicity.length > 0 || profession.length > 0 ||
        religion.length > 0 || sexuality.length > 0 || familyStatus.length > 0 || professionalLevel.length > 0) {
      setAllowNext(true);
    }
  }, [age.length, profession.length, disability.length, ethnicity.length, familyStatus.length, gender.length, religion.length, sexuality.length, professionalLevel.length]);

  return <div id={'influential-factors-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>

      <h2 className={`h2 fw-semibold mb-4`}
          style={{
            textAlign: 'center',
          }}
      >
        Which factors from your intersectional identity do you believe influenced your experience?
      </h2>

      <p className={`mb-4 h5 fw-medium`}>
        Your tags will help us to map systemic patterns affecting your community.
      </p>

      <Box
        component="form"
        maxWidth={900}
        className={`d-flex flex-wrap align-items-center justify-content-center`}
      >
        <CustomSelect
          title={`Gender`}
          list={['Female', 'Male', 'Non-binary', 'Transgender']}
          onChange={(value) => {
            setGender(value);
          }}
          value={gender}
        />
        <CustomSelect
          title={`Age`}
          list={['40+ years old', 'Youthful Look']}
          greyedList={['18-24', '25-34', '35-44', '45-54', '55-64', '65+']}
          onChange={(value) => {
            setAge(value);
          }}
          value={age}
        />
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
          title={`Disability`}
          list={['Neurodivergent', 'ADHD', 'Dyslexia', 'Autism']}
          greyedList={['Physical', 'Mental', 'Learning', 'Sensory', 'Chronic', 'Invisible']}
          onChange={(value) => {
            setDisability(value);
          }}
          value={disability}
        />

        <CustomSelect
          title={`Ethnicity`}
          greyedList={['Southeast Asian', 'Black', 'Hispanic', 'White', 'Mixed']}
          list={['Latin American', 'Eastern European', 'North American', 'South Asian', 'East Asian', 'Middle Eastern/West Asian', 'African']}
          onChange={(value) => {
            setEthnicity(value);
          }}
          value={ethnicity}
        />
        <CustomSelect
          title={`Religion`}
          greyedList={['Atheist', 'Agnostic']}
          list={['Christian', 'Muslim', 'Jewish', 'Hindu', 'Buddhist']}
          onChange={(value) => {
            setReligion(value);
          }}
          value={religion}
        />
        <CustomSelect
          title={`Sexuality`}
          list={['LGBTIQ+', 'Heterosexual']}
          greyedList={['Bisexuality', 'Homosexuality', 'Heterosexuality', 'Asexuality', 'Pansexuality', 'Queer', 'Questioning']}
          onChange={(value) => {
            setSexuality(value);
          }}
          value={sexuality}
        />
        <CustomSelect
          title={`Family Status`}
          list={['Mother', 'Father', 'Parent']}
          greyedList={['Married', 'Single', 'Divorced', 'Widowed', 'Separated', 'In a relationship', 'In an open relationship', 'In a civil union', 'In a domestic partnership', 'Engaged', 'It\'s complicated', 'Single parent', 'Step-parent', 'Adoptive parent', 'Foster parent', 'Grandparent', 'Child', 'Step-child', 'Adopted child', 'Foster child', 'Sibling', 'Step-sibling', 'Half-sibling', 'Grandchild', 'Aunt', 'Uncle', 'Cousin', 'Niece', 'Nephew']}
          onChange={(value) => {
            setFamilyStatus(value);
          }}
          value={familyStatus}
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
  </div>
}

export default InfluentialFactorsSlide;