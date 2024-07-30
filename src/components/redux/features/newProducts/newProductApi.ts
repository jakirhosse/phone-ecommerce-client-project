"use client"
import React from 'react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const newProductApi = createApi({
  reducerPath: 'newProductApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phone-ecommerce-server.vercel.app/api/new',
  }),
  endpoints: builder => ({
    getAllNewProducts: builder.query({
      query: () => '/products',
    }),
    getNewProduct: builder.query({
      query: _id => `/products/${_id}`,
    }),
  }),
});
export const { useGetAllNewProductsQuery, useGetNewProductQuery } = newProductApi;