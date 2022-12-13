export type FetchPizzasArgs = {
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

export type Pizza = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

export interface PizzaSliceState {
   items: Pizza[]
}