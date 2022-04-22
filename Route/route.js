import express from "express";
import { addUser, userLogin} from "../controller/user-controller.js";
import { getProductsfromController, getProductbyId } from "../controller/product-controller.js";
import { addPaymentGateway, paymentResponse } from "../controller/payment-Controller.js";

export const route = express.Router();

route.post('/signup', addUser);
route.post('/login', userLogin);

route.get('/products', getProductsfromController);
route.get('/product/:id', getProductbyId)
route.post('/payment', addPaymentGateway);
route.post('/callback',paymentResponse);