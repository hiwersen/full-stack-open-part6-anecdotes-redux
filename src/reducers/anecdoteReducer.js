import { createSlice } from '@reduxjs/toolkit'

export const getId = () => (Math.random() * 1e5).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    doVoteAnecdote(state, action) {
      const id = action.payload
      return state.map(item => item.id === id ? {...item, votes: item.votes + 1 } : item)
    },
    doAddAnecdote(state, action) {
      const anecdote = action.payload
      state.push(anecdote)
    },
    doSetAnecdotes(_, action) {
      return action.payload
    }
  }
})

export const { doVoteAnecdote, doAddAnecdote, doSetAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer