import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductReducer, getProductDetailReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProds : getProductReducer,
    getProdDetails : getProductDetailReducer,
    cart : cartReducer
})

const middleware = [thunk];


const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;