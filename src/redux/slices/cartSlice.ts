import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
    id: number
    title: string
    imageUrl: string
    price: number
    size: number
    type: string
    count: number
}

export interface CartInitialState {
    totalPrice: number,
    items: CartItem[]
}

const initialState: CartInitialState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>){
            const findItem = state.items.find((obj) => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
        },
        clearItems(state){
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer