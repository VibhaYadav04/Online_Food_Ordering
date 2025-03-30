import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E6C200", // Darker gold shade
    },
    secondary: {
      main: "#7B1FA2", // Deep purple for contrast
    },
    background: {
      default: "#121212", // Darker shade for better contrast
      paper: "#1E1E1E", // Slightly lighter for cards
    },
    text: {
      primary: "#E0E0E0", // Light gray for readability
      secondary: "#B0B0B0", // Slightly darker gray for subtext
    },
  },
});
