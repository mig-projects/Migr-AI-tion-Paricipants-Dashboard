import supabase from "../configuration.js";

// Fetch all tags from the database
const fetchTags = async () => {
  const { data: tags, error: tagsError } = await supabase.from('tags').select();
  if (tagsError) return { data: null, error: tagsError };

  const { data: tag_groups, error} = await supabase.from('tag_groups').select();
  if (error) return { data: null, error };

  const tag_groups_by_id = {};
  tag_groups.forEach(tag_group => {
    tag_groups_by_id[tag_group.name] = tags.filter(tag => tag.tag_group_id === tag_group.id);
  });

  return { data: tag_groups_by_id, error };
}

export { fetchTags };
