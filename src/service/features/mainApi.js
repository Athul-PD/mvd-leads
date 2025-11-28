import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
    reducerPath: 'trafficsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getSymbols: builder.query({
            query: () => 'data/symbols.json'
        }),
        getQuestions: builder.query({
            query: () => 'data/questions.json'
        }),
        getDrivinBasics: builder.query({
            query: () => 'data/drivingBasics.json'
        }),
    })
})

export const { useGetSymbolsQuery, useGetQuestionsQuery,useGetDrivinBasicsQuery } = mainApi;