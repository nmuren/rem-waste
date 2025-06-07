import { Box, Link } from "@mui/material";

const Footer = () => (
  <Box component="footer" sx={{ alignItems: "center", backgroundColor: "primary.main", display: "flex", justifyContent: "center", p: 2 }}>
    <Link
      component="a"
      href="https://github.com/nmuren"
      underline="none"
      target="_blank"
      rel="noopener noreferrer"
      variant="body2"
      color="primary.contrastText"
      sx={{ "&:hover": { textDecoration: "underline" } }}
    >
      © {new Date().getFullYear()} Nebil Muren
    </Link>
  </Box>
);

export default Footer;
