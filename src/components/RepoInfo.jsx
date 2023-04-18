import { Box, Typography } from "@mui/material";

const RepoInfo = ({ repo, login }) => {
  return (
    <Box
      maxHeight={350}
      maxWidth={450}
      overflow="scroll"
      sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      mt={5}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5">Repositories</Typography>
        <a
          href={`https://github.com/${login}?tab=repositories`}
          target="_blank"
        >
          View All Repositories
        </a>
      </Box>
      <Typography variant="p">(Only 30 repos)</Typography>
      {repo?.map((item) => {
        const date = new Date(item.created_at).toLocaleDateString();
        return (
          <Box key={item.id} border="1px solid gray" p={1}>
            <Box>
              <Typography variant="h6">{item.name}</Typography>
              <Typography
                variant="p"
                sx={{
                  backgroundColor: "aqua",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: 0.1,
                  textTransform: "capitalize",
                }}
              >
                {item.visibility}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap={1} mt={2}>
              <Typography variant="p">{item.description}</Typography>
              {item.language && (
                <Typography variant="p">Language: {item.language}</Typography>
              )}
              <Typography variant="p">
                Created on: {date}
              </Typography>{" "}
            </Box>
            <a href={item.html_url} target="_blank">
              View Repo
            </a> <br />
            <Typography variant="p">{item.stargazers_count} stars</Typography>
            <Typography variant="p">{item.watchers_count} watchers</Typography>
            <Typography variant="p">{item.open_issues_count} issues</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default RepoInfo;
