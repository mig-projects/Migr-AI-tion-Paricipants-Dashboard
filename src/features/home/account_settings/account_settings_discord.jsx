import {useState} from "react";
import {Box, IconButton, TextField, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import CustomButton from "../../../components/buttons/custom_button.jsx";
import {updateEmail} from "../../supabase/authentication.js";
import {toast} from "react-toastify";
import SlideInCard from "../components/slide_in_card.jsx";
import PropTypes from "prop-types";
import discordLogo from '../../../assets/icons/discord.svg';
import {updateDiscordUsername} from "../../supabase/database/discord_username.js";

const AccountSettingsDiscord = ({
  onBack,
}) => {
  const [allowSubmit, setAllowSubmit] = useState(false);

  const [discordUsername, setDiscordUsername] = useState('');

  return <SlideInCard>
    <div className={`d-flex flex-column gap-3 h-100`}
         style={{
           maxWidth: '800px',
         }}
    >
      <div className={`d-flex align-items-center gap-2 mb-4`}>
        <IconButton onClick={onBack}>
          <ArrowBack />
        </IconButton>
        <Typography className={`fs-5 fw-semibold`}>
          Connect your Discord account
        </Typography>
      </div>

      <Box
        component="form"
        width={'360px'}
        className={`d-flex flex-column gap-3 ms-3 h-100`}
      >
        <Typography>
          Access your Discrod entries
        </Typography>

        <TextField
          required
          value={discordUsername}
          type="text"
          id="discordUsername"
          label="Discord Username"
          fullWidth={true}
          onChange={(e) => {
            setDiscordUsername(e.target.value);
            setAllowSubmit(e.target.validity.valid);
          }}
          InputProps={{
            startAdornment: <img src={discordLogo} alt={'Discord Logo'} style={{
              width: '20px',
              height: '20px',
              marginRight: '10px',
            }}/>,
          }}
        />

        <div className={`flex-grow-1`}/>

        <CustomButton text={'Save Changes'} sx={{
          width: '200px',
        }}
          disabled={!allowSubmit}
          onClick={async () => {
            const { error } = await updateDiscordUsername({
              discordUsername,
            });

            if (error) {
              toast.error(error.message);
              return;
            }

            toast.success('Discord username updated successfully.', );
            onBack();
          }}
        />
      </Box>

    </div>
  </SlideInCard>;
}

AccountSettingsDiscord.propTypes = {
  onBack: PropTypes.func,
}

export default AccountSettingsDiscord;
