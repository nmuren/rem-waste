import { ORDER_STEPS } from "../../constants/orderSteps";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { goToStep } from "../../slices/pagesSlice";
import Stepper from "../Stepper/Stepper";

const OrderStepper = () => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.pages);

  return <Stepper currentStep={currentStep} onChange={(step) => dispatch(goToStep(step))} items={ORDER_STEPS} />;
};

export default OrderStepper;
