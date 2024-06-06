import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { url } from "inspector";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data }) => ({
        url: "/login",
        method: "POST",
        data: data,
      }),
    }),
    registerUser: builder.mutation({
      query: ({ data }) => ({
        url: "/register",
        method: "POST",
        data: data,
      }),
    }),
    createProduct:builder.mutation({
      query:({data})=>({
        url:"/create-product"
      })
    })
  }),
});

export const { useLoginMutation,useRegisterUserMutation } = baseApi;
