import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#589A8D",
      },
      secondary: {
        main: "#589A8D",
      },
      mode: darkMode ? "dark" : "light",
    },
  });

  // const darkTheme = createTheme({
  //   palette: {
  //     background: {
  //       paper: "rgba(0, 0, 0, 0.6)",
  //       // default: "#f1f5f8"
  //     },
  //     mode: darkMode ? "dark" : "light",
  //   },
  // });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <AppRouter darkMode={darkMode} handleDarkMode={handleDarkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
