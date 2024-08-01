import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    clear: (state) => {
      state.count = 0
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, clear, incrementByAmount, decrement } =
  counterSlice.actions

export default counterSlice.reducer
