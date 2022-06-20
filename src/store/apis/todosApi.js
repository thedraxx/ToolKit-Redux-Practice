
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    // RTK Query sirve para mantener cosas en cache y no andar cargando cosas a cada rato que ya hizo
    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        //Endpoint que no se modifica cuando hacemos peticiones a la API, osea la parte fija
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            // endpoint que se modifica cuando hacemos peticiones a la API, osea la parte variable
            query: () => '/todos'
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),
    })
})

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
