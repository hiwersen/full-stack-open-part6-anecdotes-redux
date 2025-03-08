import { createSlice } from '@reduxjs/toolkit'

export const getId = () => (Math.random() * 1e5).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    doSetAnecdotes(_, action) {
      return action.payload
    },
    doAddAnecdote(state, action) {
      state.push(action.payload)
    }, 
    doUpdateAnecdote(state, action) {
      const id = action.payload.id
      return state.map(item => item.id === id ? action.payload : item)
    },
  }
})

export const { doSetAnecdotes, doAddAnecdote, doUpdateAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer