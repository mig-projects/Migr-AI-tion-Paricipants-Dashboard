import {useState} from "react";
import DefaultAccountSettingsCardState from "./default_account_settings_card_state.jsx";
import AccountSettingsEmailUpdateState from "./account_settings_email_update_state.jsx";
import AccountSettingsPasswordUpdateState from "./account_settings_password_update_state.jsx";
import AccountSettingsDiscord from "./account_settings_discord.jsx";
import AccountSettingsDataState from "./account_settings_data_state.jsx";

const AccountSettingsCardStatus = {
  default: 'default',
  emailUpdate: 'emailUpdate',
  passwordUpdate: 'passwordUpdate',
  discordConnect: 'discordConnect',
  dataCopy: 'dataCopy',
}

const AccountSettingsCard = () => {
  const [accountSettingsCardStatus, setAccountSettingsCardStatus] = useState(AccountSettingsCardStatus.default);

  if (accountSettingsCardStatus === AccountSettingsCardStatus.emailUpdate) {
    return <AccountSettingsEmailUpdateState
      onBack={() => setAccountSettingsCardStatus(AccountSettingsCardStatus.default)}
    />;
  } else if (accountSettingsCardStatus === AccountSettingsCardStatus.passwordUpdate) {
    return <AccountSettingsPasswordUpdateState
      onBack={() => setAccountSettingsCardStatus(AccountSettingsCardStatus.default)}
    />;
  } else if (accountSettingsCardStatus === AccountSettingsCardStatus.discordConnect) {
    return <AccountSettingsDiscord
      onBack={() => setAccountSettingsCardStatus(AccountSettingsCardStatus.default)}
    />;
  } else if (accountSettingsCardStatus === AccountSettingsCardStatus.dataCopy) {
    return <AccountSettingsDataState
      onBack={() => setAccountSettingsCardStatus(AccountSettingsCardStatus.default)}
    />;
  } else {
    return <DefaultAccountSettingsCardState
      setAccountSettingsCardStatus={setAccountSettingsCardStatus}
    />;
  }
}

export { AccountSettingsCard as default, AccountSettingsCardStatus };
