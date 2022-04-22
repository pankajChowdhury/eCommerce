import axios from 'axios';
import * as actionTypes from '../constants/productConstants'

const url = "";

export const addToCart =(id) => async(dispatch) => {
    try{

        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type:actionTypes.ADD_PRODUCT_IN_CART_SUCCESS, payload: data})



    }catch(error){
       dispatch({ type:actionTypes.ADD_PRODUCT_IN_CART_FAIL , payload: error.message})
    }
}

export const removefromCart = (id) => (dispatch)=> {

    console.log("remove", id);

    dispatch ({type : actionTypes.REMOVE_FROM_CART, payload : id });

}