import { useDispatch } from 'react-redux'
import { doAddAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreate = event => {
        event.preventDefault()
    
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
    
        dispatch(doAddAnecdote(anecdote))
      }

    return (
        <div>
            <h2>Create New</h2>
            <form onSubmit={handleCreate}>
                <div><input name="anecdote"/></div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm