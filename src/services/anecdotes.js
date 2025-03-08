import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const postAnecdote = async (anecdote) => {
    const response = await axios.post(baseURL, anecdote)
    return response.data
}

const anecdoteServices = { getAll, postAnecdote }

export default anecdoteServices