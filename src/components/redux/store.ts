import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { topProductsApi } from './features/topProducts/topProductsApi';
import { newProductApi } from './features/newProducts/newProductApi';
import reducers from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './features/api/auth';

interface AuthState {
  user: { uid: string; email: string | null; displayName: string | null } | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const store = configureStore({
  reducer: {
    [topProductsApi.reducerPath]: topProductsApi.reducer,
    [newProductApi.reducerPath]: newProductApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      topProductsApi.middleware,
      newProductApi.middleware,
      authApi.middleware
    ),
});

setupListeners(store.dispatch);
