import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitalStateUser } from './User.types'

const initialState: InitalStateUser = {
    userName: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, payload: PayloadAction<string>) => {
            state.userName = payload.payload
        },
    },
})

export const { setUserName } = userSlice.actions

export default userSlice.reducer
