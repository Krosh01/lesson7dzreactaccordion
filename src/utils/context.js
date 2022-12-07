import axios from "axios";
import {createContext, useState} from "react";

export const CustomContext = createContext();


const Context = (props) => {

    const [gender, setGender] = useState('women')
    const [category, setCategory] = useState('shoes')
    const [products, setProducts] = useState({data: [], error: ''})
    const [price, setPrice] = useState('')

    const changeGender = (value) => {
        setGender(value)
    }
    const changeCategory = (value) => {
        setCategory(value)
    }

    const getProducts = () =>{
        axios(`http://localhost:4444/catalog/?gender=${gender}&category=${category}${price !== '' ? '&_sort=price&_order=asc' + price : ''}`)
        .then(({data}) => setProducts({...products, data: data}))
        .catch((error) => setProducts({...products, error: error}))
    }

    const value = {
        gender,
        products,
        category,
        changeGender,
        changeCategory,
        getProducts,
        setProducts,
        setPrice
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context;