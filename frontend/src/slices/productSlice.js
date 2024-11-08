import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        product: {},
        error: null
    },
    reducers: {
        productRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        productSuccess(state, action) {
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        },
        productFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = productSlice;

export const { productRequest, productSuccess, productFail } = actions;

export default reducer;  