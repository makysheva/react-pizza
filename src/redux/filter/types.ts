export enum PROPERTY {
    RATING = 'rating',
    PRICE = 'price',
    TITLE = 'title',
}

export type TSort = {
    name: string
    property: PROPERTY
    order: string
}

export interface FilterSliceState {
    searchValue: string
    categoryId: number
    currentPage: number
    sort: TSort
}