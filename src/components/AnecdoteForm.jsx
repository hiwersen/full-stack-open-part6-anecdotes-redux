import { useDispatch } from 'react-redux'
import { doAddItem, getId } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreate = event => {
        event.preventDefault()
    
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
    
        const anecdote = {
          content,
          id: getId(),
          votes: 0
        }
    
        dispatch(doAddItem(anecdote))
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