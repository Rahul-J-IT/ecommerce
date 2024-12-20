import axios from 'axios';
import { productsFail, productsSuccess, productsRequest } from '../slices/productsSlice';

export const getProducts = (keyword,price,currentPage) => async (dispatch) => {
    try {  
        dispatch(productsRequest()) 
        let link=`/api/v1/products?page=${currentPage}`
        if(keyword){
                link+=`&keyword=${keyword}`
        }
        if(price) {
            link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`
        }
        const { data } = await axios.get(link);
       
        dispatch(productsSuccess(data))
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(productsFail(error.response?.data?.message || 'Error fetching products'))
    }
}

