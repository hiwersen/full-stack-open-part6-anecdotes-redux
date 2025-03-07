import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer
    }
})

store.subscribe(() => console.log('state after action  ------:', store.getState()))

export default store