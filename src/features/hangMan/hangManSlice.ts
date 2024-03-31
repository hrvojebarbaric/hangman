import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAlphabetArray } from '../../utils/helpers'
import axios from 'axios'
import { STATUS_FAILED, STATUS_IDLE, STATUS_LOADING, STATUS_SUCCEEDED } from '../../utils/constants'
import { InitalStateHangMan } from './HangMan.types'

const initialState: InitalStateHangMan = {
    alphabetArray: createAlphabetArray(),
    numberOfErrors: 0,
    duration: 0,
    userInput: '',
    quotes: {
        author: '',
        authorSlug: '',
        content: '',
        dateAdded: '',
        dateModified: '',
        length: 0,
        tags: [],
        _id: '',
    },
    quoteStatus: STATUS_IDLE,
    createScoreStatus: STATUS_IDLE,
}

const hangManSlice = createSlice({
    name: 'hangManSlice',
    initialState,
    reducers: {
        gameNextMove: (state, payload: PayloadAction<string>) => {
            state.hiddenQuote = payload.payload
            state.numberOfMissingLetters = payload.payload?.match(/_/g)?.length
        },
        addNewLetter: (state, payload: PayloadAction<string>) => {
            state.userInput = state.userInput + payload.payload
        },
        resetUserInput: (state) => {
            state.userInput = ''
        },
        increaseNumberOfErrors: (state) => {
            state.numberOfErrors++
        },
        resetNumberOfErrors: (state) => {
            state.numberOfErrors = 0
        },
        setDuration: (state, payload: PayloadAction<number>) => {
            state.duration = payload.payload * 1000
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuotes.pending, (state) => {
                state.quoteStatus = STATUS_LOADING
            })
            .addCase(getQuotes.fulfilled, (state, action) => {
                state.quoteStatus = STATUS_SUCCEEDED
                state.quotes = action.payload
            })
            .addCase(getQuotes.rejected, (state, action) => {
                state.quoteStatus = STATUS_FAILED
                state.error = action.error.message
            })
    },
})

export const getQuotes = createAsyncThunk('quotes/quotesAsync', async () => {
    const response = await axios.get(import.meta.env.VITE_QUOTES_URL)
    return response.data
})

export const {
    gameNextMove,
    addNewLetter,
    resetUserInput,
    increaseNumberOfErrors,
    resetNumberOfErrors,
    setDuration,
} = hangManSlice.actions

export default hangManSlice.reducer
