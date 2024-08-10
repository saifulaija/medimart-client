import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { tagTypeList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: " https://server-room-share.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
