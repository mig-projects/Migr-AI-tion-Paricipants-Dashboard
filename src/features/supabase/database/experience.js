import supabase from "../configuration.js";
import PropTypes from "prop-types";

// Insert an experience in the database
const insertNewExperience = async ({
  // List of discrimination names
  discriminationNameList,
}) => {
  const { data, error: experienceError } = await supabase.from('experiences').insert({}).select();
  if (experienceError || discriminationNameList.length === 0) return { data, error: experienceError };

  const experienceID = data[0].id;
  const { error } = await supabase.from('discrimination_names').insert(discriminationNameList.map((discriminationName) => {
    return {
      experience_id: experienceID,
      name: discriminationName,
    };
  }));
  return { data, error };
}

insertNewExperience.propTypes = {
  discriminationNameList: PropTypes.array,
}

// Update an experience text in the database
const updateExperienceText = async ({
  // Experience ID
  experienceID,

  // Experience text
  experienceText,
}) => {
  const { error } = await supabase.from('experiences').update({
    text:   experienceText,
  }).eq('id', experienceID);
  return { error };
}

updateExperienceText.propTypes = {
  experienceID: PropTypes.string.isRequired,
  experienceText: PropTypes.string.isRequired,
}

// Update the headline of the experience
const updateExperienceHeadline = async ({
  // Experience ID
  experienceID,

  // Headline text
  headlineText,
}) => {
  const { error } = await supabase.from('experiences').update({
    headline: headlineText,
  }).eq('id', experienceID);
  return { error };
}

updateExperienceHeadline.propTypes = {
  experience_id: PropTypes.string.isRequired,
  headline_text: PropTypes.string.isRequired,
}

// Update hide Experience text and published status
const updateExperienceHideAndPublished = async ({
  // Experience ID
  experienceID,

  // Hide experience text
  hideExperienceText,

  // Published status
  published,
}) => {
  const { error } = await supabase.from('experiences').update({
    hide_text: hideExperienceText,
    published: published,
  }).eq('id', experienceID);
  return { error };
}

updateExperienceHideAndPublished.propTypes = {
  experienceID: PropTypes.string.isRequired,
  hideExperienceText: PropTypes.bool.isRequired,
  published: PropTypes.bool.isRequired,
}

// Fetch all experiences from the database
const fetchAllExperiences = async () => {
  const {data, error} = await supabase.rpc('fetch_experiences').select();
  return { data, error };
}

export {
  insertNewExperience,
  updateExperienceHeadline,
  updateExperienceText,
  updateExperienceHideAndPublished,
  fetchAllExperiences,
};