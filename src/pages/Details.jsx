import { Box, Container, Grid, List, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SourceIcon from "@mui/icons-material/Source";
import PagesIcon from "@mui/icons-material/Pages";
import { statistics } from "../styles/globalStyle";
import { iconStyle } from "../styles/globalStyle";
import FollowersInfo from "../components/FollowersInfo";
import RepoInfo from "../components/RepoInfo";

const Details = () => {
  const [userDetails, setUserDetails] = useState({});
  const [followers, setFollowers] = useState([]);
  const [repo, setRepo] = useState([]);
  const { login } = useParams();

  const BASE_URL = `https://api.github.com/users/${login}`;

  const getDetailedData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setUserDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFollowersData = async () => {
    try {
      const { data } = await axios(`${BASE_URL}/followers`);
      setFollowers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRepoData = async () => {
    try {
      const { data } = await axios(`${BASE_URL}/repos`);
      setRepo(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Promise.all([getDetailedData(), getFollowersData(), getRepoData()]);
    // getDetailedData()
  }, []);

  console.log(userDetails);
  // console.log(followers);
  console.log(repo);

  return (
    <Container sx={{ border: "1px solid gray", minHeight: "100%" }}>
      <Box textAlign="center" mt={5} mb={5}>
        <img
          src={userDetails?.avatar_url}
          alt="image"
          width="300px"
          style={{ borderRadius: "50%", border: "1px solid #C7FFED" }}
        />
        <Typography variant="h5" mt={3} textTransform="capitalize">
          <b>{userDetails?.name}</b>
        </Typography>
        <Typography variant="p">{userDetails?.html_url}</Typography>
      </Box>

      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Box sx={statistics}>
          <PeopleOutlineIcon sx={iconStyle[0]} />
          <Box width="70px">
            <Typography variant="p">Followers</Typography>{" "}
            <Typography variant="h4" textAlign="center">
              <b>{userDetails.followers}</b>
            </Typography>{" "}
          </Box>
        </Box>
        <Box sx={statistics}>
          <PersonAddAltIcon sx={iconStyle[1]} />
          <Box width="70px">
            <Typography variant="p">Following</Typography>{" "}
            <Typography variant="h4" textAlign="center">
              <b>{userDetails.following}</b>
            </Typography>{" "}
          </Box>
        </Box>
        <Box sx={statistics}>
          <SourceIcon sx={iconStyle[2]} />
          <Box width="70px">
            <Typography variant="p" ml={2}>
              Repos
            </Typography>{" "}
            <Typography variant="h4" textAlign="center">
              <b>{userDetails.public_repos}</b>
            </Typography>{" "}
          </Box>
        </Box>
        <Box sx={statistics}>
          <PagesIcon sx={iconStyle[3]} />
          <Box width="70px">
            <Typography variant="p" ml={2}>
              Gists
            </Typography>{" "}
            <Typography variant="h4" textAlign="center">
              <b>{userDetails.public_gists}</b>
            </Typography>{" "}
          </Box>
        </Box>
      </List>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <FollowersInfo followers={followers} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <RepoInfo repo={repo} login={login} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
