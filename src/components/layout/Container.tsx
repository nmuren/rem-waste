import { Container as MuiContainer, type ContainerProps } from "@mui/material";

const Container = ({ children, ...props }: ContainerProps) => (
  <MuiContainer maxWidth="xl" {...props} sx={{ p: 0, pb: 4, ...props.sx }}>
    {children}
  </MuiContainer>
);

export default Container;
