import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { Restaurante, Cardapio } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantesInterno: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCardapio: builder.query<Cardapio, string>({
      //teste nao utilizado
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetCardapioQuery,
  useGetRestaurantesQuery,
  useGetRestaurantesInternoQuery
} = api

export default api
