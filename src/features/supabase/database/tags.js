import supabase from "../configuration.js";

// Fetch all tags from the database
const fetchTags = async () => {
  const {data, error} = await supabase.rpc('get_tags').select();
  return { data, error };
}

export { fetchTags };
