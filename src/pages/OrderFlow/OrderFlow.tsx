import { Box } from "@mui/material";
import { useMemo } from "react";

import ContentWrapper from "../../components/layout/ContentWrapper";
import OrderStepper from "../../components/OrderStepper/OrderStepper";
import { DEFAULT_STEP_INDEX, ORDER_STEPS } from "../../constants/orderSteps";
import { useAppSelector } from "../../hooks/useAppSelector";
import PlaceholderStep from "./PlaceholderStep/PlaceholderStep";
import SkipSize from "./SkipSize/SkipSize";

const OrderFlow = () => {
  const { currentStep } = useAppSelector((state) => state.pages);
  const orderStep = ORDER_STEPS[currentStep];

  const content = useMemo(() => {
    if (currentStep === DEFAULT_STEP_INDEX) return <SkipSize />;
    return <PlaceholderStep title={orderStep.label} />;
  }, [currentStep, orderStep]);

  return (
    <ContentWrapper>
      <Box sx={{ alignItems: "start", columnGap: 6, display: "flex", flexDirection: { md: "row", xs: "column" }, rowGap: 2 }}>
        <Box sx={{ minWidth: "max-content", position: { md: "sticky", xs: "static" }, top: 100, width: { md: "auto", xs: "100%" } }}>
          <OrderStepper />
        </Box>
        <Box sx={{ flexGrow: 1 }}>{content}</Box>
      </Box>
    </ContentWrapper>
  );
};

export default OrderFlow;
