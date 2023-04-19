import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#C7FFED",
      },
      secondary: {
        main: "#589A8D",
      },
      type: darkMode ? "dark" : "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      background: {
        paper: "rgba(0, 0, 0, 0.7)",
      },
      type: darkMode ? "dark" : "light",
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <BrowserRouter>
        <AppRouter darkMode={darkMode} handleDarkMode={handleDarkMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
