import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'

type ParamsType = {
    currentPage: number
    category: string
    search: string
    searchValue: string
    sort: string
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    
    async (params: ParamsType) => {
        const {currentPage, category, search, searchValue, sort} = params

        const {data} = await axios.get(
            `https://633ab455e02b9b64c61551f6.mockapi.io/pizzas?page=${currentPage}&limit=4&sortBy=${sort.property}&order=${sort.order}&${category}&search=${search}&title=${searchValue}`
            )
    
        return data
    },
)

const initialState = {
    items: []
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchPizzas.fulfilled]: (state, action: PayloadAction<string>) => {
            console.log('state', state)
        }
    },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer