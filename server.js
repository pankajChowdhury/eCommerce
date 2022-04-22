import express from "express";
import mongoose from "mongoose";
import Connection from "./Connection.js";
import dotenv from "dotenv";
import DefaultData from "./defualt.js";
import { route } from "./Route/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import { v4 as uuid } from 'uuid';


const app = express();

dotenv.config();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const URL = `mongodb+srv://${user}:${password}@ecommerce.oqt48.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`;



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}


const PORT = process.env.PORT || 8000;



app.listen(PORT, ()=>{
    console.log(`Server started successfully in port ${PORT}`);
});

// Connection(process.env.MONGODB_URI||URL);
if(process.env.MONGODB_URI){
    console.log("dhukaa");
    Connection(process.env.MONGODB_URI);

}else{
    Connection(URL);
}

DefaultData();

app.use('/', route);

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};

paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuid();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='500';
paytmParams['CALLBACK_URL']='http://localhost:8000/callback';
paytmParams['EMAIL']='pankajchowdhury091220@gmail.com'
paytmParams['MOBILE_NO']='34343535'

//console.log("paytmParams" , paytmParams);


