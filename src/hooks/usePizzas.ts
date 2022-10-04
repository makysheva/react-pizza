import { useEffect, useState } from "react"

type DataType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export const usePizzas = () => {
    const [data, setData] = useState<DataType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://633ab455e02b9b64c61551f6.mockapi.io/pizzas')
            .then(res => res.json())
            .then((arr) => {
                setIsLoading(false)
                setData(arr)
            })
    }, [])

    return {
        data,
        isLoading
    }
}