import { useDispatch, useSelector } from 'react-redux'
import { doVoteItem } from '../reducers/anecdoteReducer'

// Presentational component
const List = ({ anecdote, handleVote }) => {
    return (
        <li>
            <div>
                {anecdote.content}
            </div>
            <div>
                Has {anecdote.votes}
                <button onClick={handleVote}>Vote</button>
            </div>
        </li>
    )
}

// Container component
const AnecdoteList = () => {
    const anecdotes = useSelector(state => [...state].sort((a,b) => b.votes - a.votes))
    const dispatch = useDispatch()

    return (
        <ul>
            { anecdotes.map(anecdote => {
                return (
                    <List
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleVote={ () => dispatch(doVoteItem(anecdote.id)) }
                    />
                )
            }) }
        </ul>
    )
}

export default AnecdoteList