
import * as actionTypes from '../constants/productConstants';

export const cartReducer = (state = { cartitems : [] }, action) => {

    switch(action.type){
        case actionTypes.ADD_PRODUCT_IN_CART_SUCCESS : 
            const item  =  action.payload ; 
            const exist = state.cartitems.find(product => product.id ===item.id);
            if(exist){
                return state; 

            }else{

                return {...state, cartitems: [...(state.cartitems) , item]}

            }
        case actionTypes.ADD_PRODUCT_IN_CART_FAIL : 
            console.log("Add to Cart Failure");
            return state;

        case actionTypes.REMOVE_FROM_CART : 
         return {...state, cartitems : state.cartitems.filter(product => product.id !== action.payload)}
            
        default : return state;


    }


}