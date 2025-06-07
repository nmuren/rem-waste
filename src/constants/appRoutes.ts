import { lazy } from "react";

const OrderFlow = lazy(() => import("../pages/OrderFlow/OrderFlow"));

export const APP_ROUTES = [
  {
    Component: OrderFlow,
    label: "Order a Skip",
    path: "/",
  },
];
