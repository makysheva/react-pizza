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