export const statistics = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "125px",
  height: "70px",
  border: "1px dotted gray",
  borderRadius: "5px",
  padding: 1,
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  backgroundColor: "white",
};

export const iconStyle = [
  {
    border: "1px solid black",
    borderRadius: "50%",
    padding: 0.7,
    backgroundColor: "#C7FFED",
  },
  {
    border: "1px solid black",
    borderRadius: "50%",
    padding: 0.7,
    backgroundColor: "pink",
  },
  {
    border: "1px solid black",
    borderRadius: "50%",
    padding: 0.7,
    backgroundColor: "#89D99D",
  },
  {
    border: "1px solid black",
    borderRadius: "50%",
    padding: 0.7,
    backgroundColor: "#F28585",
  },
];

export const boxStyle = {
  height: 450,
  maxWidth: 450,
  minWidth: 250,
  overflow: "scroll",
  "&::-webkit-scrollbar": { display: "none" },
  margin: "2.5rem auto",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  padding: 2,
  backgroundColor: "white",
};

export const visibilityStyle = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  border: "1px dotted gray",
  borderRadius: "5px",
  padding: 0.3,
  textTransform: "capitalize",
  display: "block",
  width: "40px",
  mt: 0.5,
  ml: "10px",
});
