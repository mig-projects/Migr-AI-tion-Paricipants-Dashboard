import {Card, Typography} from "@mui/material";

const EmailCard = () => {
  return <Card className={`d-flex justify-content-between align-items-center`}
               style={{
                 height: '80px',
                 padding: '20px 30px',
               }}
  >
    <Typography className={`fs-5 fw-semibold`}>FINDHR</Typography>
    <Typography className={`fw-medium`}>name@email.com</Typography>
  </Card>;
}

export default EmailCard;
