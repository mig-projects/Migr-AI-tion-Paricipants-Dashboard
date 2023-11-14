import supabase from './configuration.js';

// Create a new user account
const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { user, error };
}

// Sign in an existing user
const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user, error };
}

// Sign out the current user
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// Update the current user's email address
const updateEmail = async (email) => {
  const { user, error } = await supabase.auth.updateUser({
    email,
  });
  return { user, error };
}

// Update the current user's password
const updatePassword = async (password) => {
  const { user, error } = await supabase.auth.updateUser({
    password,
  });
  return { user, error };
}

export {signUp, signIn, signOut, updateEmail, updatePassword};
