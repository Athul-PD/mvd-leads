import { configureStore } from '@reduxjs/toolkit/react';
import languageReducer from '../service/features/createLanguage'
import { mainApi } from './features/mainApi';

export const store = configureStore({
    reducer: {
        language: languageReducer,
        [mainApi.reducerPath] : mainApi.reducer
    },
    middleware: (getDefault) => getDefault().concat(mainApi.middleware)
})