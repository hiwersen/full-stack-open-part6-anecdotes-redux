import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const create = async content => {
    const anecdoteToPost = { content, votes: 0 }
    const response = await axios.post(baseURL, anecdoteToPost)
    return response.data
}

const vote = async anecdote => {
    anecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(`${baseURL}/${anecdote.id}`, anecdote)
    return response.data
}

const anecdoteServices = { getAll, create, vote }

export default anecdoteServices