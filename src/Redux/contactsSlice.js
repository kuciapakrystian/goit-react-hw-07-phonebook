import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'Contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64a00809ed3c41bdd7a6ed28.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/Contacts`,
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/Contacts',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/Contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;