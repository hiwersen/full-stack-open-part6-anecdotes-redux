import { useDispatch, useSelector } from 'react-redux'
import { doVoteItem } from '../reducers/anecdoteReducer'

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
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if (filter) {
            anecdotes = anecdotes.filter(({ content })=> content.includes(filter))
        }

       return [...anecdotes].sort((a, b) => b.votes - a.votes)
    })
    

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