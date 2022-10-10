
import { createSlice } from '@reduxjs/toolkit'
import path from "path";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
    value: number
}
const NAME = path.basename(__filename, path.extname(__filename));

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: NAME,
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },

    },
})

export const { increment, decrement } = counterSlice.actions

export const selectValue = (state: RootState) => state.counter.value
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer

