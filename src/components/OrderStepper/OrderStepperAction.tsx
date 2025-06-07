import { Button, type ButtonProps } from "@mui/material";
import { Box } from "@mui/system";

import { ORDER_STEPS } from "../../constants/orderSteps";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { nextStep, prevStep } from "../../slices/pagesSlice";

interface IOrderStepperAction {
  backProps?: ButtonProps;
  nextProps?: ButtonProps;
}

const OrderStepperAction = ({ backProps, nextProps }: IOrderStepperAction) => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.pages);

  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 4 }}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => dispatch(prevStep())}
        disabled={currentStep === 0}
        {...backProps}
      >
        Back
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => dispatch(nextStep())}
        disabled={currentStep === ORDER_STEPS.length - 1}
        {...nextProps}
      >
        {currentStep === ORDER_STEPS.length - 1 ? "Confirm" : "Continue"}
      </Button>
    </Box>
  );
};

export default OrderStepperAction;
