import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import storage from 'redux-persist/es/storage';
// const storage = {
//   getItem: key => Promise.resolve(localStorage.getItem(key)),
//   setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
//   removeItem: key => Promise.resolve(localStorage.removeItem(key)),
// };

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
