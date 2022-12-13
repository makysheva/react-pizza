import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TSort = {
    name: string
    property: 'rating' | 'price' | 'title'
    order: string
}

interface FilterSliceState {
    searchValue: string
    categoryId: number
    currentPage: number
    sort: TSort
}

const initialState: FilterSliceState = {
    searchValue: '',
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
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>){
            state.searchValue = action.payload
        },
        setSort(state, action: PayloadAction<TSort>){
            state.sort = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>){
            state.currentPage = action.payload
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
              state.currentPage = action.payload.currentPage
              state.categoryId = action.payload.categoryId
              state.sort = action.payload.sort;
            } else {
              state.currentPage = 1;
              state.categoryId = 0;
              state.sort = {
                name: 'популярности',
                property: 'price',
                order: 'desc',
              };
            }
        },
    }
})

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer