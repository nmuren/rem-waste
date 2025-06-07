import { Alert, Grid, Skeleton, Typography } from "@mui/material";

import OrderStepperAction from "../../../components/OrderStepper/OrderStepperAction";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectSkip } from "../../../slices/pagesSlice";
import { useGetSkipOptionsQuery } from "../../../slices/skipApiSlice";
import SkipSizeItem from "./SkipSizeItem";

const SkipSize = () => {
  const dispatch = useAppDispatch();
  const { selectedSkipId } = useAppSelector((state) => state.pages);
  const { data: skipOptions, isLoading, error } = useGetSkipOptionsQuery();

  if (isLoading) return <SkipSizeSkeleton />;

  if (error)
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error instanceof Error ? error.message : "An error occurred while loading skip sizes."} Please try again later.
      </Alert>
    );

  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Choose Your Skip Size
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "text.secondary", mb: 4 }}>
        Select the skip size that best suits your needs.
      </Typography>

      <Grid container spacing={3}>
        {skipOptions?.map((skip) => (
          <SkipSizeItem item={skip} isSelected={selectedSkipId === skip.id} onSelect={() => dispatch(selectSkip(skip.id))} key={skip.id} />
        ))}
      </Grid>

      <Typography sx={{ color: "text.secondary", fontSize: 12, mt: 3 }}>
        *Imagery and information shown throughout this website may not reflect the exact shape or size specification, colors may vary,
        options and/or accessories may be featured at additional cost.
      </Typography>

      <OrderStepperAction nextProps={{ disabled: selectedSkipId === null }} />
    </>
  );
};

const SkipSizeSkeleton = () => (
  <>
    <Skeleton variant="text" width="60%" height={40} />
    <Skeleton variant="text" width="40%" sx={{ mb: 4 }} />
    <Grid container spacing={3}>
      {[1, 2].map((key) => (
        <Grid key={key} size={{ md: 6, xs: 12 }}>
          <Skeleton variant="rounded" height={120} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default SkipSize;
