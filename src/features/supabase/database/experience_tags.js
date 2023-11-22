import PropTypes from "prop-types";
import supabase from "../configuration.js";

// Update the tags of the experience
const updateExperienceTags = async ({
  // Experience ID
  experienceID,

  // List of tags
  tagIDsList,

  // Other tag text
  otherTagText,
}) => {
  const { error: deletionError } = await supabase.from('experiences_tags').delete().eq('experience_id', experienceID);
  if (deletionError) return { error: deletionError };

  const { error } = await supabase.from('experiences_tags').insert(tagIDsList.map((tag_id) => {
    return {
      experience_id: experienceID,
      tag_id,
    };
  }));

  if (otherTagText) {
    const { error } = await supabase.from('experiences').update({
      other_tag_text: otherTagText,
    }).eq('id', experienceID);
    return { error };
  }
  return { error };
}

updateExperienceTags.propTypes = {
  experienceID: PropTypes.number.isRequired,
  tag_ids_list: PropTypes.array.isRequired,
  other_tag_text: PropTypes.string,
}

export {
  updateExperienceTags,
}
