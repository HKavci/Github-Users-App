import { Box, Container, List, Typography } from "@mui/material";
import { boxStyle } from "../styles/globalStyle";

const FollowersInfo = ({ followers }) => {
  return (
    <Box sx={boxStyle}>
      <Typography variant="h5"><b>Followers</b></Typography>
      <Typography variant="p">(Only 30 people)</Typography>
      {followers?.map((follower) => {
        return (
          <Box key={follower.id} display="flex" gap={3} mt={3}>
            <img
              src={follower?.avatar_url}
              alt="image"
              width="50px"
              height="50px"
              style={{ borderRadius: "50%", border: "1px solid gray" }}
            />
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="p" flex="1">
                <b>{follower?.login}</b>
              </Typography>
              <Typography variant="p" flex="1" overflow="hidden">{follower?.html_url}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default FollowersInfo;
