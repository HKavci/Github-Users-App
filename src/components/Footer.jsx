import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      padding={1}
      fontSize="1.2rem"
      {...props}
    >
      {"Copyright © "}
      <b color="inherit">Hakan KAVCI</b> 2023
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return <Copyright sx={{ mt: 8, mb: 4 }} />;
};

export default Footer;
