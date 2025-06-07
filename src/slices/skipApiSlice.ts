import { API_ROUTES } from "../constants/apiRoutes";
import type { ISkipOption, ISkipOptionApiResponse } from "../interfaces/skip";
import { emptySplitApi } from "../store/emptySplitApi";
import { skipApiResponseToSkip } from "../utils/skipUtils";

const emptySplitApiWithAddedTags = emptySplitApi.enhanceEndpoints({
  addTagTypes: ["SKIP"],
});

const skipApiSlice = emptySplitApiWithAddedTags.injectEndpoints({
  endpoints: (builder) => ({
    getSkipOptions: builder.query<ISkipOption[], void>({
      providesTags: [{ type: "SKIP" }],
      query: () => API_ROUTES.SKIP_OPTIONS_WITH_PARAMS,
      transformResponse: (response: ISkipOptionApiResponse[]) => response.map(skipApiResponseToSkip),
    }),
  }),
});

export const { useGetSkipOptionsQuery } = skipApiSlice;
