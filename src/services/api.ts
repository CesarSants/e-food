import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { Restaurante, Cardapio } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      //unknown esta no lugar de any
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetCardapioQuery,
  useGetRestaurantesQuery,
  useGetRestaurantesInternoQuery,
  usePurchaseMutation
} = api

export default api
