import { request } from "express";
import Product from "../model/productSchema.js";


export const getProductsfromController = async(request,response) =>{
    try{
        const productItems  =  await Product.find({});
        response.json(productItems);


    }catch(error){
       // response.json("Error in server");
        console.log("Error: ", error.message );
    }

}

export const getProductbyId = async(request, response) => {
    try{
        const product = await Product.findOne({'id' : request.params.id});
        //console.log(product);
        response.json(product);

    }catch(error){
        console.log("Error: ", error.message);

    }


}