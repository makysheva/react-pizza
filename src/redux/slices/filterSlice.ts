import { createSlice } from '@reduxjs/toolkit'

type Sort = {
    name: string
    property: 'rating' | 'price' | 'title'
    order: string
}

interface FilterSliceState {
    categoryId: number
    currentPage: number
    sort: Sort
}

const initialState: FilterSliceState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности ↓',
        property: 'rating',
        order: 'desc',
    },
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSort(state, action){
            state.sort = action.payload
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload
        },
    }
})

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer