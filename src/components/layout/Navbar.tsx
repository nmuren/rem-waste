import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar position="sticky" color="inherit" sx={{ mb: 4 }}>
    <Toolbar sx={{ flexDirection: { sm: "row", xs: "column" }, gap: 2 }}>
      <Typography variant="h6" color="primary" component={Link} to="/" sx={{ fontWeight: 700, textDecoration: "none" }}>
        REM Waste - Skip Size
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
