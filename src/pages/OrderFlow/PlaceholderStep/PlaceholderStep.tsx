import PaperContent from "../../../components/layout/PaperContent";
import OrderStepperAction from "../../../components/OrderStepper/OrderStepperAction";

interface IPlaceholderStep {
  title: string;
}

const PlaceholderStep = ({ title }: IPlaceholderStep) => (
  <>
    <PaperContent title={title} description="This step is coming soon. We're working hard to bring you the best experience." />
    <OrderStepperAction />
  </>
);

export default PlaceholderStep;
