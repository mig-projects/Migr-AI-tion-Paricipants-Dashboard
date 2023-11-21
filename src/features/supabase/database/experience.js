import supabase from "./configuration.js";
import PropTypes from "prop-types";

// Insert an experience in the database
const insertNewExperience = async ({
  // List of discrimination names
  discriminationNameList,

  // Experience text
  experience_text,
}) => {
  const { data, error } = await supabase.from('experiences').insert({
    discrimination_name_list: discriminationNameList,
    text: experience_text,
  });
  return { id: data.id, error };
}

insertNewExperience.propTypes = {
  discriminationNameList: PropTypes.array.isRequired,
  experience_text: PropTypes.string.isRequired,
}

// Update an experience text in the database
const updateExperienceText = async ({
  // Experience ID
  experience_id,

  // Experience text
  experience_text,
}) => {
  const { error } = await supabase.from('experiences').update({
    text: experience_text,
  }).eq('id', experience_id);
  return { error };
}

updateExperienceText.propTypes = {
  experience_id: PropTypes.string.isRequired,
  experience_text: PropTypes.string.isRequired,
}

// Update the discrimination names of the experience
const updateExperienceDiscriminationNames = async ({
  // Experience ID
  experience_id,

  // List of discrimination names
  discrimination_name_list,
}) => {
  const { error } = await supabase.from('experiences').update({
    discrimination_name_list: discrimination_name_list,
  }).eq('id', experience_id);
  return { error };
}

updateExperienceDiscriminationNames.propTypes = {
  experience_id: PropTypes.string.isRequired,
  discrimination_name_list: PropTypes.array.isRequired,
}

// Update the headline of the experience
const updateExperienceHeadline = async ({
  // Experience ID
  experience_id,

  // Headline text
  headline_text,
}) => {
  const { error } = await supabase.from('experiences').update({
    headline: headline_text,
  }).eq('id', experience_id);
  return { error };
}

updateExperienceHeadline.propTypes = {
  experience_id: PropTypes.string.isRequired,
  headline_text: PropTypes.string.isRequired,
}

// Update the tags of the experience
const updateExperienceTags = async ({
  // Experience ID
  experience_id,

  // List of tags
  tags_list,
}) => {
  const { error } = await supabase.from('experiences').update({
    tags: tags_list,
  }).eq('id', experience_id);
  return { error };
}

updateExperienceTags.propTypes = {
  experience_id: PropTypes.string.isRequired,
  tags_list: PropTypes.array.isRequired,
}

// Update Experience Categories
const updateExperienceCategories = async ({
  // Experience ID
  experience_id,

  // List of categories
  categories_list,
}) => {
  const { error } = await supabase.from('experiences').update({
    categories: categories_list,
  }).eq('id', experience_id);
  return { error };
}

updateExperienceCategories.propTypes = {
  experience_id: PropTypes.string.isRequired,
  categories_list: PropTypes.array.isRequired,
}

export {
  insertNewExperience,
  updateExperienceHeadline,
  updateExperienceText,
  updateExperienceDiscriminationNames,
  updateExperienceTags,
  updateExperienceCategories,
};