import PropTypes from "prop-types";
import supabase from "../configuration.js";

// Update the discrimination names of the experience
const updateExperienceDiscriminationNames = async ({
  // Experience ID
  experienceID,

  // List of discrimination names
  discriminationNameList,
}) => {
  const { error: deletionError } = await supabase.from('discrimination_names').delete().eq('experience_id', experienceID);
  if (deletionError) return { error: deletionError };

  const { error } = await supabase.from('discrimination_names').insert(discriminationNameList.map((discriminationName) => {
    return {
      experience_id: experienceID,
      name: discriminationName,
    };
  }));
  return { error };
}

updateExperienceDiscriminationNames.propTypes = {
  experienceID: PropTypes.string.isRequired,
  discriminationNameList: PropTypes.array.isRequired,
}

export {
  updateExperienceDiscriminationNames,
}
