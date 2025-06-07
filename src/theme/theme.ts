import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 36, fontWeight: 600, textTransform: "none", transition: "background 0.2s" },
        sizeLarge: ({ theme }) => ({ fontSize: 14, fontWeight: 700, [theme.breakpoints.up("sm")]: { fontSize: 16 } }),
      },
    },
    MuiPaper: { styleOverrides: { root: { boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.06)" } } },
    MuiRadio: { defaultProps: { size: "small" } },
    MuiTooltip: { defaultProps: { arrow: true } },
  },
  palette: {
    background: { default: "#f7f9fc", paper: "#ffffff" },
    mode: "light",
    primary: { contrastText: "#ffffff", main: "#009b72" },
    secondary: { contrastText: "#ffffff", main: "#192d35" },
    text: { primary: "#4D4D4D", secondary: "#999999" },
    warning: { contrastText: "#ffffff", main: "#E36414" },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: "Mulish, sans-serif" },
});
