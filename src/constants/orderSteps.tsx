import { CalendarMonthOutlined, CreditCardOutlined, DeleteOutline, LocalShipping, LocationOn, ShieldOutlined } from "@mui/icons-material";

import type { IStepperItem } from "../components/Stepper/Stepper";

export const DEFAULT_STEP_INDEX = 2;

export const ORDER_STEPS: IStepperItem[] = [
  { Icon: LocationOn, label: "Postcode" },
  { Icon: DeleteOutline, label: "Waste Type" },
  { Icon: LocalShipping, label: "Select Skip" },
  { Icon: ShieldOutlined, label: "Permit Check" },
  { Icon: CalendarMonthOutlined, label: "Choose Date" },
  { Icon: CreditCardOutlined, label: "Payment" },
];
