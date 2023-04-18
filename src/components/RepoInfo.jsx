import { Box, List, Typography } from "@mui/material";
import { boxStyle, visibilityStyle } from "../styles/globalStyle";


const RepoInfo = ({ repo, login }) => {
  return (
    <Box sx={boxStyle}>
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
          <Box
            key={item.id}
            border="1px dotted gray"
            borderRadius="5px"
            backgroundColor="#f1f5f8"
            p={1}
            mt={3}
          >
            <Box>
              <Typography
                variant="p"
                sx={visibilityStyle}
              >
                {item.visibility}
              </Typography>
              <Typography variant="h6" mt={1} textAlign="center">
                {item.name}
              </Typography>
              <Typography variant="p" display="block" mt={1}>
                {item.description}
              </Typography>
            </Box>
            <List
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 15px",
              }}
            >
              <Box display="flex" flexDirection="column" gap={1} mt={2}>
                {item.language && (
                  <Typography variant="p">Language: {item.language}</Typography>
                )}
                <Typography variant="p">Created on: {date}</Typography>{" "}
                <a href={item.html_url} target="_blank">
                  View Repo
                </a>{" "}
              </Box>
              <List sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="p">
                  {item.stargazers_count} stars
                </Typography>
                <Typography variant="p">
                  {item.watchers_count} watchers
                </Typography>
                <Typography variant="p">
                  {item.open_issues_count} issues
                </Typography>
              </List>
            </List>
            <br />
          </Box>
        );
      })}
    </Box>
  );
};

export default RepoInfo;
