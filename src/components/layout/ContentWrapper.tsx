import { Box, type BoxProps } from "@mui/material";

const ContentWrapper = ({ children, ...props }: BoxProps) => (
  <Box {...props} sx={{ borderRadius: 3, p: 4, ...props.sx }}>
    {children}
  </Box>
);

export default ContentWrapper;
