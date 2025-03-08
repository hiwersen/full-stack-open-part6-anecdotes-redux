import { useDispatch } from 'react-redux'
import anecdoteServices from '../services/anecdotes'
import { doAddAnecdote } from '../reducers/anecdoteReducer'
import { doSetNotification, doRemoveNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreate = async event => {
        event.preventDefault()
    
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const anecdote = await anecdoteServices.create(content)
    
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