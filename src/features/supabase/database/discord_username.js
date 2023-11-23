import supabase from "../configuration.js";
import PropTypes from "prop-types";

// Update the Discord username of the user
const updateDiscordUsername = async ({
  // Discord username
  discordUsername,
}) => {
  const { data, error } = await supabase.rpc('update_discord_username', {
    username: discordUsername,
  });
  return { data, error };
}

updateDiscordUsername.propTypes = {
  discordUsername: PropTypes.string.isRequired,
}

// Get the Discord username of the user
const getDiscordUsername = async () => {
  const { data, error } = await supabase.rpc('get_discord_username');
  return { data, error };
}

export {
  updateDiscordUsername,
  getDiscordUsername,
};
