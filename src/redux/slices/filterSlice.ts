import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
    categoryId: number,
    sort: object
}

const initialState: FilterState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        property: 'rating'
       }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        }
    }
})

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer