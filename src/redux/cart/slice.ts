import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartItems } from '../../utils/getCartItems'
import { getTotalPrice } from '../../utils/getTotalPrice'
import { CartInitialState, CartItemType } from './types'

const {items, totalPrice} = getCartItems()

const initialState: CartInitialState = {
    totalPrice,
    items,
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

            state.totalPrice = getTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find((obj) => obj.id === action.payload)

            if (findItem && findItem.count > 1) {
                findItem.count--
                state.totalPrice = getTotalPrice(state.items)
            }
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = getTotalPrice(state.items)
        },
        clearItems(state){
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer