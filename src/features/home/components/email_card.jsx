import {Card, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getCurrentUser} from "../../supabase/authentication.js";

const EmailCard = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    getCurrentUser().then((user) => {
      setEmail(user?.email);
    });
  }, []);

  return <Card className={`d-flex justify-content-between align-items-center`}
               elevation={0}
               style={{
                 height: '80px',
                 padding: '20px 30px',
               }}
  >
    <Typography className={`fs-5 fw-semibold`}>FINDHR</Typography>
    <Typography className={`fw-medium`}>{email}</Typography>
  </Card>;
}

export default EmailCard;
