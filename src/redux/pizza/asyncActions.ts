import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { FetchPizzasArgs, Pizza } from "./types"

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