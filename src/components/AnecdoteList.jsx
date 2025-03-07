import { useDispatch, useSelector } from 'react-redux'
import { doVoteItem } from '../reducers/anecdoteReducer'
import { createSelector } from '@reduxjs/toolkit'

// Presentational component
const List = ({ anecdote, handleVote }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                Has {anecdote.votes}
                <button onClick={handleVote}>Vote</button>
            </div>
        </div>
    )
}

// Container component
const AnecdoteList = () => {
    const dispatch = useDispatch()

    const selectAnecdotes = ({ anecdotes }) => anecdotes
    const selectFilter = ({ filter }) =>  filter
    const outputSelector = (anecdotes, filter) => {
        if (filter) {
            anecdotes = anecdotes.filter(({ content })=> content.includes(filter))
        }

       return [...anecdotes].sort((a, b) => b.votes - a.votes)
    }

    const memoizedSelector = createSelector([selectAnecdotes, selectFilter], outputSelector)
    const anecdotes = useSelector(memoizedSelector)
    

    return (
        <div>
            { anecdotes.map(anecdote => {
                return (
                    <List
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleVote={ () => dispatch(doVoteItem(anecdote.id)) }
                    />
                )
            }) }
        </div>
    )
}

export default AnecdoteList