import axios from 'axios';
import { productFail, productRequest, productSuccess } from '../slices/productSlice';

export const getproduct = id => async (dispatch) => {
    try {
        dispatch(productRequest())
        const { data } = await axios.get(`/api/v1/product/${id}`);
        dispatch(productSuccess(data.product))
    } catch (error) {
        dispatch(productFail(error.response.data.message))
    }
}