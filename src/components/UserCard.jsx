import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserCard = (item) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 200 }}>
      <Box>
        <CardMedia
          component="img"
          height="170"
          sx={{
            backgroundImage: `url(${item.avatar_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // borderRadius: "50%"
            // objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Username:</b> {item.login}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Box sx={{display: "flex", justifyContent:"center", mb: 2}}>
          <Button
            variant="contained"
            type="button"
            onClick={() => navigate(`/details/${item.login}`)}
          >
            Details
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default UserCard;
