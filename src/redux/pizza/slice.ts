import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { fetchPizzas } from './asyncActions'
import { Pizza, PizzaSliceState } from './types'

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