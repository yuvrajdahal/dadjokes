import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../utils/api";
const adapter = createEntityAdapter();
export const extendedSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/random/joke",
      providedTags: ["Jokes"],
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Post", id })), "Post"]
          : ["Post"],
    }),
  }),
});
export const { useGetDataQuery } = extendedSlice;
const res = extendedSlice.endpoints.getData.select();
const selectedData = createSelector(res, (postResult) => postResult.data);
export const { selectAll } = adapter.getSelectors(
  (state) => selectedData(state) ?? adapter.getInitialState()
);
