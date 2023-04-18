import { Box, Container, List, Typography } from "@mui/material";

const FollowersInfo = ({ followers }) => {
  return (
    <Box
      maxHeight={350}
      maxWidth={450}
      overflow="scroll"
      sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      m={5}
    >
      <Typography variant="h5">Followers</Typography>
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
              <Typography variant="p">
                <b>{follower?.login}</b>
              </Typography>
              <Typography variant="p">{follower?.html_url}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default FollowersInfo;
