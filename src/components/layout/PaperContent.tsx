import { Paper, Typography } from "@mui/material";

import ContentWrapper from "./ContentWrapper";

interface IPaperContent {
  headline?: string;
  title?: string;
  description?: string;
}

const PaperContent = ({ headline, description, title }: IPaperContent) => (
  <ContentWrapper
    component={Paper}
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "40vh", textAlign: "center" }}
  >
    {!!headline && (
      <Typography variant="h1" gutterBottom>
        {headline}
      </Typography>
    )}
    {!!title && (
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
    )}
    {!!description && <Typography color="text.secondary">{description}</Typography>}
  </ContentWrapper>
);

export default PaperContent;
