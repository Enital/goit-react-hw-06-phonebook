// // import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import phoneBookReducer from "./phoneBook/phoneBookReducer";

// // const rootReducer = combineReducers({
// //   contacts: phonebookReducer,
// // });

// const store = configureStore({
//   reducer: {
//     contacts: phoneBookReducer,
//   },
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { addContact, deleteContact } from "./contactSlice";
// // import { configureStore } from "@reduxjs/toolkit";
// // import { rootReducer } from "./reducer";

// export const store = configureStore({
//     reducer: {
//         addContact: addContact,
//         deleteContact: deleteContact,
//     },
// });
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'
import { contactsReducer } from './contactSlice'


const persistConfig = {
    key: 'contacts',
    storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
})

export let persistor = persistStore(store)