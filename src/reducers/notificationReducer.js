import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'render here notification...',
    reducers: {
        doSetNotification(_, action) {
            return action.payload
        }
    }
})

export const { doSetNotification } = notificationSlice.actions
export default notificationSlice.reducer