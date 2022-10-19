import { createSlice } from '@reduxjs/toolkit'

enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}
  
type Sort = {
    name: string;
    property: SortPropertyEnum;
};

export interface FilterState {
    categoryId: number,
    sort: Sort
}

const initialState: FilterState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        property: SortPropertyEnum.RATING_DESC,
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
        }
    }
})

export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer