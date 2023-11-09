import {useState} from "react";
import DefaultAccountSettingsCardState from "./default_account_settings_card_state.jsx";
import AccountSettingsEmailUpdateState from "./account_settings_email_update_state.jsx";
import AccountSettingsPasswordUpdateState from "./account_settings_password_update_state.jsx";

const AccountSettingsCardStatus = {
  default: 'default',
  emailUpdate: 'emailUpdate',
  passwordUpdate: 'passwordUpdate',
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
  } else {
    return <DefaultAccountSettingsCardState
      setAccountSettingsCardStatus={setAccountSettingsCardStatus}
    />;
  }
}

export { AccountSettingsCard as default, AccountSettingsCardStatus };
