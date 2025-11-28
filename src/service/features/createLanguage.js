import { createSlice } from '@reduxjs/toolkit/react'

const createLanguage = createSlice({
    name: 'language',
    initialState: {
        language: 'en',
        totalPoints: 0,
    },
    reducers: {
        changeLanguage: (state,action) => {
            state.language = action.payload;
        },
        increaseTotalpoints: (state,action) => {
            state.totalPoints += action.payload;
        },
        resetPoints: (state) => {
            state.totalPoints = 0;
        }
    }
})

export const {changeLanguage,increaseTotalpoints,resetPoints} = createLanguage.actions;
export default createLanguage.reducer;