import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import UserCard from "../components/UserCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState([]);

  const BASE_URL = `https://api.github.com/search/users?q=${search}`;

  const getUser = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setUserList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    getUser();
    setSearch("");
  };

  return (
    <Container
      sx={{
        minHeight: "70vh",
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        mt={5}
        pt={3}
        fontWeight="bolder"
        color="#589A8D"
      >
        Search User
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <TextField
          type="text"
          label="Search"
          value={search}
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              handleClick();
            }
          }}
          sx={{
            width: "40%",
            minWidth: "270px",
          }}
        />
        <SearchIcon
          sx={{
            position: "relative",
            right: "30px",
            top: "15px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
      </Box>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 3,
          gap: 5,
        }}
      >
        {userList?.items?.map((item) => (
          <UserCard key={item.id} {...item} />
        ))}
      </Container>
    </Container>
  );
};

export default Home;
