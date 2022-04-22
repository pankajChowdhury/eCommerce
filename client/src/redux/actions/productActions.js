import axios from "axios";
import * as actionTypes from '../constants/productConstants';


const url = "";

export const getProducts = () => async(dispatch) => {
    try {
        const { data }  = await axios.get(`${url}/products`);
        dispatch({ type : actionTypes.GET_PRODUCT_SUCCESS, payload : data })
        
    } catch (error) {
        dispatch({ type : actionTypes.GET_PRODUCT_FAIL, payload : error.message })
    }

}


export const getProductDetail = (id) => async(dispatch) => {
    try{
        const { data } =await axios.get(`${url}/product/${id}`);
        
        dispatch({type : actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload : data})

    }catch(error){
        dispatch({ type : actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.message })
    }
}