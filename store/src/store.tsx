import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { clear, decrement, increment } from './counterSlice'

import { Provider, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: counterSlice,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export function useStore() {
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()
  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
    decrement: () => dispatch(decrement()),
  }
}

export function StoreProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>
}
