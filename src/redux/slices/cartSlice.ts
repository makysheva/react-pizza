import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItemType = {
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
    items: CartItemType[]
}

const initialState: CartInitialState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemType>){
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
        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload)

            if (findItem && findItem.count > 0) {
                findItem.count--
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.count) + sum
                }, 0)
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        clearItems(state){
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer