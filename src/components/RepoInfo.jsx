import { Box, List, Typography } from "@mui/material";
import { boxStyle, visibilityStyle } from "../styles/globalStyle";
import { useTheme } from "@mui/material/styles";

const RepoInfo = ({ repo, login }) => {
  const theme = useTheme();
  return (
    <Box sx={boxStyle}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5">
          <b>Repositories</b>
        </Typography>
        <a
          href={`https://github.com/${login}?tab=repositories`}
          target="_blank"
          style={{ color: theme.palette.secondary.main }}
        >
          <b>View All Repos</b>
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
              <Typography variant="p" sx={visibilityStyle}>
                {item.visibility}
              </Typography>
              <Typography variant="h6" mt={1} textAlign="center">
                <b>{item.name}</b>
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
                margin: "0 10px",
              }}
            >
              <Box display="flex" flexDirection="column" gap={1} mt={2}>
                {item.language && (
                  <Typography variant="p">
                    <b>Language:</b> {item.language}
                  </Typography>
                )}
                <Typography variant="p">
                  <b>Created on:</b> {date}
                </Typography>{" "}
                <a
                  href={item.html_url}
                  target="_blank"
                  style={{ color: theme.palette.secondary.main }}
                >
                  <b>View Repo</b>
                </a>{" "}
              </Box>
              <List sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="p">
                  <b>{item.stargazers_count}</b> stars
                </Typography>
                <Typography variant="p">
                  <b>{item.watchers_count}</b> watchers
                </Typography>
                <Typography variant="p">
                  <b>{item.open_issues_count}</b> issues
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
