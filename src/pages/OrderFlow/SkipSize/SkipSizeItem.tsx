import { ReportOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { Box, Grid, Radio, Typography } from "@mui/material";

import ImageWithFallback from "../../../components/ImageWithFallback/ImageWithFallback";
import type { ISkipOption } from "../../../interfaces/skip";
import { getSkipImageUrl } from "../../../utils/skipUtils";

interface ISkipSizeItem {
  item: ISkipOption;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipSizeItem = ({ item, isSelected, onSelect }: ISkipSizeItem) => (
  <Grid
    size={{ lg: 6, xs: 12 }}
    onClick={onSelect}
    sx={(theme) => ({
      "&:hover": {
        ...(!isSelected && { borderColor: "divider" }),
        boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.1)",
        transform: "scale(1.03)",
      },
      alignItems: "center",
      backgroundColor: "background.paper",
      border: "1px solid",
      borderColor: isSelected ? "primary.light" : "unset",
      borderRadius: 3,
      boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.06)",
      color: theme.palette.primary.contrastText,
      cursor: "pointer",
      display: "flex",
      flexDirection: { sm: "row", xs: "column" },
      gap: 1,
      p: 1,
      transition: "all 0.1s ease-in-out",
    })}
  >
    <Radio checked={isSelected} value={item.id} color="primary" readOnly disableRipple disableFocusRipple disableTouchRipple />

    <ImageWithFallback
      src={getSkipImageUrl(item.size)}
      alt={`${item.size} Yard Skip`}
      sx={{ borderRadius: 1, flexShrink: 0, height: 96, objectFit: "cover", width: 168 }}
      fallback={<ShoppingBasketOutlined sx={{ color: "primary.light", fontSize: 40 }} />}
    />

    <Box sx={{ flexGrow: 1, width: { sm: "auto", xs: "100%" } }}>
      <Typography variant="subtitle1" sx={{ color: isSelected ? "primary.light" : "text.primary", fontWeight: 700 }}>
        {item.size} Yard Skip
      </Typography>

      {!!item.hirePeriodDays && (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.hirePeriodDays} {item.hirePeriodDays === 1 ? "day" : "days"} hire period
        </Typography>
      )}

      {!item.allowedOnRoad && (
        <Typography variant="caption" sx={{ alignItems: "start", color: "warning.light", display: "flex", gap: 0.25 }}>
          <ReportOutlined sx={{ fontSize: 16, height: 20 }} />
          Not Allowed On The Road
        </Typography>
      )}
    </Box>

    <Typography
      variant="h5"
      sx={{
        color: isSelected ? "primary.light" : "text.primary",
        display: "flex",
        flexDirection: "column",
        fontWeight: 700,
        letterSpacing: 1,
        minWidth: 80,
      }}
    >
      £{item.priceBeforeVat}
      <Typography variant="caption" sx={{ color: "text.secondary", letterSpacing: 0 }} component="span">
        excl. VAT
      </Typography>
    </Typography>
  </Grid>
);

export default SkipSizeItem;
