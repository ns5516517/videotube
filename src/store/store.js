import { configureStore } from "@reduxjs/toolkit"
import userReducers from './features/user/user';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
    key: "root",
    storage,
};


const rootReducer = combineReducers({
    user: userReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const makeStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            })
    })

    const persistor = persistStore(store)

    return { store, persistor }
}