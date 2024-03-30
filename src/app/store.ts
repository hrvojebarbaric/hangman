import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import hangManReducer from '../features/hangMan/hangManSlice'
import scoreReducer from '../features/score/scoreSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        hangMan: hangManReducer,
        score: scoreReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
