import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../services/anecdotes'
import { createNotification } from './notificationReducer.js'

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

export const setAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch(doSetAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await anecdoteServices.create(content)
    dispatch(doAddAnecdote(anecdote))
    dispatch(createNotification(`You added: '${anecdote.content}'`, 5))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    anecdote = await anecdoteServices.vote(anecdote)
    dispatch(doUpdateAnecdote(anecdote))
    dispatch(createNotification(`You voted: '${anecdote.content}'`, 5))
  }
} 

export const { doSetAnecdotes, doAddAnecdote, doUpdateAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer