import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {
  Box,
  Checkbox, FormControl,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import {useEffect, useState} from "react";
import {useSwiper} from "swiper/react";
import PropTypes from "prop-types";

const InfluentialFactorsSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  const [gender, setGender] = useState([]);
  const [age, setAge] = useState([]);
  const [disability, setDisability] = useState([]);
  const [name, setName] = useState([]);
  const [ethnicity, setEthnicity] = useState([]);
  const [appearance, setAppearance] = useState([]);
  const [religion, setReligion] = useState([]);
  const [sexuality, setSexuality] = useState([]);
  const [familyStatus, setFamilyStatus] = useState([]);

  useEffect(() => {
    setAllowNext(false);
    if (gender.length > 0 || age.length > 0 || disability.length > 0 ||
        name.length > 0 || ethnicity.length > 0 || appearance.length > 0 ||
        religion.length > 0 || sexuality.length > 0 || familyStatus.length > 0) {
      setAllowNext(true);
    }
  }, [age.length, appearance.length, disability.length, ethnicity.length, familyStatus.length, gender.length, name.length, religion.length, sexuality.length]);

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
          list={['18-24', '25-34', '35-44', '45-54', '55-64', '65+']}
          onChange={(value) => {
            setAge(value);
          }}
          value={age}
        />
        <CustomSelect
          title={`Disability`}
          list={['Physical', 'Mental', 'Learning', 'Sensory', 'Chronic', 'Invisible']}
          onChange={(value) => {
            setDisability(value);
          }}
          value={disability}
        />
        <CustomSelect
          title={`Name`}
          list={['IDK', 'IDK', 'IDK', 'IDK', 'IDK', 'IDK']}
          onChange={(value) => {
            setName(value);
          }}
          value={name}
        />
        <CustomSelect
          title={`Ethnicity`}
          list={['South Asian', 'East Asian', 'Southeast Asian', 'Black', 'Hispanic', 'White', 'Mixed']}
          onChange={(value) => {
            setEthnicity(value);
          }}
          value={ethnicity}
        />
        <CustomSelect
          title={`Appearance`}
          list={['Chubby', 'Skinny', 'Tall', 'Short', 'Bald', 'Hairy', 'Bearded', 'Glasses', 'Tattoos', 'Piercings', 'Scars', 'Birthmarks', 'Freckles', 'Acne', 'Wrinkles']}
          onChange={(value) => {
            setAppearance(value);
          }}
          value={appearance}
        />
        <CustomSelect
          title={`Religion`}
          list={['Christian', 'Muslim', 'Jewish', 'Hindu', 'Buddhist', 'Atheist', 'Agnostic']}
          onChange={(value) => {
            setReligion(value);
          }}
          value={religion}
        />
        <CustomSelect
          title={`Sexuality`}
          list={['Bisexuality', 'Homosexuality', 'Heterosexuality', 'Asexuality', 'Pansexuality', 'Queer', 'Questioning']}
          onChange={(value) => {
            setSexuality(value);
          }}
          value={sexuality}
        />
        <CustomSelect
          title={`Family Status`}
          list={['Married', 'Single', 'Divorced', 'Widowed', 'Separated', 'In a relationship', 'In an open relationship', 'In a civil union', 'In a domestic partnership', 'Engaged', 'It\'s complicated', 'Single parent', 'Step-parent', 'Adoptive parent', 'Foster parent', 'Grandparent', 'Child', 'Step-child', 'Adopted child', 'Foster child', 'Sibling', 'Step-sibling', 'Half-sibling', 'Grandchild', 'Aunt', 'Uncle', 'Cousin', 'Niece', 'Nephew']}
          onChange={(value) => {
            setFamilyStatus(value);
          }}
          value={familyStatus}
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

const CustomSelect = ({
  onChange,
  value,
  title,
  list,
}) => {
  return <FormControl variant={`outlined`} sx={{ m: 1, minWidth: 150 }}>
    <Select
      sx={{
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
      }}
      multiple
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      displayEmpty
      inputProps={{ outline: "none" }}
      renderValue={(selected) => `${title} ${selected.length > 0 ? `(${selected.length})` : ''}`}
      MenuProps={{
        PaperProps: {
          elevation: 0,
        },
      }}
    >
      {list.map((name) => (
        <MenuItem key={name} value={name}>
          <Checkbox checked={value.indexOf(name) > -1} />
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>;
}

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  title: PropTypes.string,
  list: PropTypes.array,
}

export default InfluentialFactorsSlide;
