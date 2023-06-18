'use client'
import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return [foods, setFoods]
}

export default useFetch