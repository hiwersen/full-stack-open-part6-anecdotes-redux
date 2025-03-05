import { useSelector, useDispatch } from 'react-redux'
import { getVote, getAdd, getId } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => [...state].sort((a,b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const handleAdd = event => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    const anecdote = {
      content,
      id: getId(),
      votes: 0
    }

    dispatch(getAdd(anecdote))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(getVote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleAdd}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App