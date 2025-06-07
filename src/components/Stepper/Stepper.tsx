import {
  Box,
  Step,
  stepConnectorClasses,
  StepLabel,
  stepLabelClasses,
  Stepper as MuiStepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { ElementType } from "react";

export interface IStepperItem {
  label: string;
  Icon: ElementType;
}

interface IStepper {
  currentStep: number;
  onChange: (step: number) => void;
  items: IStepperItem[];
}

const Stepper = ({ currentStep, onChange, items }: IStepper) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MuiStepper
      activeStep={currentStep}
      orientation={isMobile ? "horizontal" : "vertical"}
      sx={{
        mt: -1,
        [`& .${stepConnectorClasses.line}`]: {
          ...(isMobile
            ? {
                borderLeft: "none",
                borderTopColor: theme.palette.grey[300],
                borderTopStyle: "solid",
                borderTopWidth: 2,
                minHeight: 0,
                minWidth: 5,
              }
            : {
                borderLeftColor: theme.palette.grey[300],
                borderLeftStyle: "solid",
                borderLeftWidth: 2,
                marginLeft: "14px",
                minHeight: 32,
              }),
        },
        [`& .${stepConnectorClasses.active}, & .${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            ...(isMobile
              ? {
                  borderTopColor: theme.palette.primary.light,
                }
              : {
                  borderLeftColor: theme.palette.primary.light,
                }),
          },
        },
      }}
    >
      {items.map(({ label, Icon }, idx) => {
        const isCompleted = idx < currentStep;
        const isActive = idx === currentStep;
        const isDisabled = idx > currentStep;
        return (
          <Step key={label} completed={isCompleted} disabled={isDisabled}>
            <StepLabel
              icon={
                <Box
                  sx={{
                    alignItems: "center",
                    backgroundColor: isCompleted ? theme.palette.primary.light : theme.palette.background.paper,
                    border: `1px solid ${!isDisabled ? theme.palette.primary.main : theme.palette.grey[300]}`,
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    p: isMobile ? 0.5 : 1,
                  }}
                >
                  <Icon
                    sx={{
                      color: isCompleted ? theme.palette.primary.contrastText : theme.palette.grey[500],
                      fontSize: isMobile ? 24 : 36,
                    }}
                  />
                </Box>
              }
              onClick={() => !isDisabled && onChange(idx)}
              sx={{
                [`& .${stepLabelClasses.label}`]: {
                  color: isActive ? "primary.main" : isCompleted ? "text.primary" : "text.secondary",
                  display: isMobile ? "none" : "block",
                  fontWeight: isActive ? 700 : 400,
                },
                ...(isMobile && {
                  [`& .${stepLabelClasses.iconContainer}`]: {
                    p: 0,
                  },
                }),
                cursor: !isDisabled ? "pointer" : "not-allowed !important",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );
};

export default Stepper;
