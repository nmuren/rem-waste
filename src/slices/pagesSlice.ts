import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { DEFAULT_STEP_INDEX, ORDER_STEPS } from "../constants/orderSteps";

interface IPagesState {
  currentStep: number;
  selectedSkipId: number | null;
}

const initialState: IPagesState = {
  currentStep: DEFAULT_STEP_INDEX,
  selectedSkipId: null,
};

export const pagesSlice = createSlice({
  initialState,
  name: "pages",
  reducers: {
    goToStep: (state, action: PayloadAction<IPagesState["currentStep"]>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < ORDER_STEPS.length - 1) state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 0) state.currentStep -= 1;
    },
    selectSkip: (state, action: PayloadAction<IPagesState["selectedSkipId"]>) => {
      state.selectedSkipId = action.payload;
    },
  },
});

export const { goToStep, nextStep, prevStep, selectSkip } = pagesSlice.actions;
