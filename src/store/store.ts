import { configureStore } from "@reduxjs/toolkit";

import { pagesSlice } from "../slices/pagesSlice";
import { emptySplitApi } from "./emptySplitApi";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emptySplitApi.middleware),
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    pages: pagesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
