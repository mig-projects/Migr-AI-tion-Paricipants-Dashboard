import PropTypes from "prop-types";
import supabase from "../configuration.js";

// Update the Categories of the experience
const updateExperienceCategories = async ({
  // Experience ID
  experienceID,

  // List of Category IDs
  categoryIDsList,

  // Other Category text
  otherCategoryText,
}) => {
  const { error: deletionError } = await supabase.from('experiences_categories').delete().eq('experience_id', experienceID);
  if (deletionError) return { error: deletionError };

  const { error } = await supabase.from('experiences_categories').insert(categoryIDsList.map((categoryID) => {
    return {
      experience_id: experienceID,
      category_id: categoryID,
    };
  }));

  if (otherCategoryText) {
    const { error } = await supabase.from('experiences').update({
      other_category_text: otherCategoryText,
    }).eq('id', experienceID);
    return { error };
  }
  return { error };
}

updateExperienceCategories.propTypes = {
  experienceID: PropTypes.number.isRequired,
  tag_ids_list: PropTypes.array.isRequired,
  other_tag_text: PropTypes.string,
}

export {
  updateExperienceCategories,
}
