import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserCard = (item) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 200, padding: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <Box>
        <CardMedia
          component="img"
          height="210"
          sx={{
            backgroundImage: `url(${item.avatar_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            textAlign="center"
            overflow="hidden"
          >
            <b>{item.login}</b>
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
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
