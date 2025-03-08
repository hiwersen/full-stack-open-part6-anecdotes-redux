import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        doSetNotification(_, action) {
            return action.payload
        },
        doRemoveNotification() {
            return null
        }
    }
})

let timeoutID = null

export const createNotification = (message, timeout) => {
    clearTimeout(timeoutID)
    return dispatch => {
        timeoutID = setTimeout(() => {
            dispatch(doRemoveNotification())
        }, timeout * 1e3)    

        dispatch(doSetNotification(message))
    } 
}

export const { doSetNotification, doRemoveNotification } = notificationSlice.actions
export default notificationSlice.reducer