import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreateScore, InitalStateScore } from './Score.types'
import axios from 'axios'
import { STATUS_FAILED, STATUS_IDLE, STATUS_LOADING, STATUS_SUCCEEDED } from '../../utils/constants'

const initialState: InitalStateScore = {
    score: [],
    scoreStatus: '',
    error: '',
    createScoreStatus: STATUS_IDLE,
}

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createScore.pending, (state) => {
                state.scoreStatus = STATUS_LOADING
                state.error = ''
            })
            .addCase(createScore.fulfilled, (state) => {
                state.scoreStatus = STATUS_SUCCEEDED
            })
            .addCase(createScore.rejected, (state, action) => {
                state.scoreStatus = STATUS_FAILED
                state.error = action.error.message
            })
            .addCase(getScore.pending, (state) => {
                state.scoreStatus = STATUS_LOADING
                state.error = ''
            })
            .addCase(getScore.fulfilled, (state, action) => {
                state.scoreStatus = STATUS_SUCCEEDED
                state.score = action.payload
            })
            .addCase(getScore.rejected, (state, action) => {
                state.scoreStatus = STATUS_FAILED
                state.error = action.error.message
            })
    },
})

export const createScore = createAsyncThunk('score/createScore', async (postData: CreateScore) => {
    const response = await axios.post(
        'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores',
        postData,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    return response.data
})

export const getScore = createAsyncThunk('score/getScore', async () => {
    const response = await axios.get(
        'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores'
    )
    return response.data
})

export default scoreSlice.reducer
