import axios from 'axios';

import { setError, setLoading, setProducts } from '../slices/product.js'

export const getProducts = () => async(dispatch) => {
    dispatch(setLoading(true));
    try {
        const {data} = await axios.get('/api/products');
        dispatch(setProducts(data))
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : 'An unexpected error has occured. Please try again later'
            )
        );
    }
}