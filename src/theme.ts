import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
    },
    secondary: {
      main: "#EC4899",
      light: "#F472B6",
      dark: "#DB2777",
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      background: "linear-gradient(135deg, #7C3AED, #EC4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "#94A3B8",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.8,
      color: "#94A3B8",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
          transition: "all 0.3s ease",
          background: "linear-gradient(135deg, #7C3AED, #EC4899)",
          color: "white",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 16px rgba(124, 58, 237, 0.3)",
            background: "linear-gradient(135deg, #7C3AED, #EC4899)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        outlined: {
          background: "transparent",
          border: "2px solid",
          borderImage: "linear-gradient(135deg, #7C3AED, #EC4899) 1",
          "&:hover": {
            background: "rgba(124, 58, 237, 0.1)",
            borderImage: "linear-gradient(135deg, #7C3AED, #EC4899) 1",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: "rgba(30, 41, 59, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 24px rgba(124, 58, 237, 0.2)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(124, 58, 237, 0.2)",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(124, 58, 237, 0.2)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          background: "rgba(30, 41, 59, 0.8)",
          backdropFilter: "blur(20px)",
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
