import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import Brightness4Icon from "@mui/icons-material/Brightness4";



const Navbar = ({darkMode, handleDarkMode}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              backgroundColor: "#f1f5f8",
              border: "1px solid gray",
              transition: "transform 0.7s",
              ":hover": {
                transform: "rotate(360deg) scale(1.3)",
                backgroundColor: "#F2CDAC",
              },
            }}
          >
            {" "}
            <GitHubIcon />{" "}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              maxWidth: "230px",
              flexGrow: 1,
              cursor: "pointer",
              textAlign: { xs: "center", md: "left" },
              transition: "transform 0.5s",
              ":hover": {
                transform: "scale(1.1)",
              }
            }}
            onClick={() => navigate("/")}
          >
            GITHUB PROFILE APP
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <IconButton
          color="inherit"
          aria-label="toggle dark mode"
          onClick={handleDarkMode}
        >
          <Brightness4Icon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
