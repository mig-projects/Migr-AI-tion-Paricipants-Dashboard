import supabase from './configuration.js';

// Create a new user account
const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

// Sign in an existing user
const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// Sign out the current user
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// Get the current user's session
const getCurrentSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
}

// Is user signed in?
const isUserSignedIn = async () => {
  try {
    const {data} = await getCurrentSession();
    return data.session !== null;
  } catch (error) {
    return false;
  }
}

// Get the current user
const getCurrentUser = async () => {
  try {
    const {data} = await getCurrentSession();
    return data.session.user;
  } catch (error) {
    return null;
  }
}

// Update the current user's email address
const updateEmail = async (email) => {
  const { data, error } = await supabase.auth.updateUser({
    email,
  });
  return { data, error };
}

// Update the current user's password
const updatePassword = async (password) => {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  return { data, error };
}

export {signUp, signIn, signOut, updateEmail, updatePassword, getCurrentSession, isUserSignedIn, getCurrentUser};
