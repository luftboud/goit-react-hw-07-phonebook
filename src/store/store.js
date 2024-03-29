import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: 'contacts'
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer })

// export const persistor = persistStore(store)