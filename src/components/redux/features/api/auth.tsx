import auth from '@/firebase/firebase.config';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

// Helper function to get serializable user data
const getSerializableUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<any, { email: string; password: string }>({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const userData = getSerializableUser(userCredential.user);
          return { data: userData };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
    signup: builder.mutation<any, { email: string; password: string }>({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const userData = getSerializableUser(userCredential.user);
          return { data: userData };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
    logout: builder.mutation<any, void>({
      queryFn: async () => {
        try {
          await signOut(auth);
          return { data: 'Logged out' };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = authApi;
