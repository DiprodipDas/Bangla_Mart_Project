import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { url } from "inspector";

export const baseApi = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints:(builder)=>({

        // login:builder.mutation({
        //     query:({data})=>{
        //         url:'/login',
        //         method:"",
        //         data:""
        //     }

        // }),
        // getUser:builder.query({
        //     query:()=>'/get-user'
        // })

    })
})

export const {useGetUserQuery} = baseApi
