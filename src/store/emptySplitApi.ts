import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { WE_WANT_WASTE_API } from "../constants/apiRoutes";

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: WE_WANT_WASTE_API,
  }),
  endpoints: () => ({}),
});
