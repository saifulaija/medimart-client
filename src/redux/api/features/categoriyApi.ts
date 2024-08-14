
import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (data) => ({
        url: "/category/create-category",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        data,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    getAllCategory: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/category",
        method: "GET",
        params: arg,
      }),

      providesTags: [tagTypes.category],
    }),

    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),

    updateCategory: build.mutation({
      query: (data) => ({
        url: `/blog/update-blog/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
