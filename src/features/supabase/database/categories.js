import supabase from "../configuration.js";

// Fetch all categories from the database
const fetchCategories = async () => {
  const { data, error } = await supabase.from('categories').select('name');
  return { data, error };
}

export { fetchCategories };