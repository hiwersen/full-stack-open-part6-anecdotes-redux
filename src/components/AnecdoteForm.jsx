import { useDispatch } from 'react-redux'
import anecdoteServices from '../services/anecdotes'
import { doAddAnecdote } from '../reducers/anecdoteReducer'
import { doSetNotification, doRemoveNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreate = async event => {
        event.preventDefault()
    
        const anecdoteToPost = {
            content: event.target.anecdote.value,
            votes: 0
        } 
        event.target.anecdote.value = ''

        const anecdote = await anecdoteServices.postAnecdote(anecdoteToPost)
    
        dispatch(doAddAnecdote(anecdote))
        dispatch(doSetNotification(`You added: '${anecdote}'`))
        setTimeout(() => {
            dispatch(doRemoveNotification())
        }, 5000)
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