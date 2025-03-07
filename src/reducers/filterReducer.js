import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        doChangeFilter(_, action) {
            return action.payload
        }
    }
})

export const { doChangeFilter } = filterSlice.actions
export default filterSlice.reducer