import { Box, Link } from "@mui/material";
import { type JSX } from "react";

import Container from "./Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: JSX.Element }) => (
  <Box sx={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
    <SkipLink />
    <Navbar />
    <Container id="main-content" sx={{ flexGrow: 1 }} tabIndex={-1}>
      {children}
    </Container>
    <Footer />
  </Box>
);

const SkipLink = () => (
  <Link
    href="#main-content"
    sx={{
      "&:focus": { left: 0, top: 0, width: "auto" },
      backgroundColor: "primary.main",
      borderRadius: 1,
      color: "primary.contrastText",
      left: -9999,
      padding: 2,
      position: "absolute",
      top: "auto",
      width: 1,
      zIndex: 9999,
    }}
  >
    Skip to main content
  </Link>
);

export default Layout;
