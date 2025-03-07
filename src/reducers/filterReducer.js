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

/*
const reducer = (state = '', action) => {
    console.log('FILTER state before action  -------:', state)
    console.log('action ----------------------------:', action)

    switch (action.type) {
        case 'CHANGE_FILTER':
            return action.payload
        default:
            return state
    }
}

export const doChangeFilter = filter => {
    return {
        type: 'CHANGE_FILTER',
        payload: filter
    }
}

export default reducer
*/