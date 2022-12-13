import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'

type FetchPizzasArgs = {
    currentPage: number
    category: string
    search: string
    searchValue: string
    sort: {
        property: string
        order: string
    }
    order: string
}

type Pizza = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

interface PizzaSliceState {
   items: Pizza[]
}

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
    'pizza/fetchPizzasStatus',
    
    async (params) => {
        const {currentPage, category, search, searchValue, sort} = params

        const {data} = await axios.get<Pizza[]>(
            `https://633ab455e02b9b64c61551f6.mockapi.io/pizzas?page=${currentPage}&limit=4&sortBy=${sort.property}&order=${sort.order}&${category}&search=${search}&title=${searchValue}`
            )
    
        return data
    },
)

const initialState: PizzaSliceState = {
    items: []
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Pizza[]>){
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
           state.items = []
        });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
        });

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.items = []
        });
    },
})

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer