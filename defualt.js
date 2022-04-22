import { products } from "./product.js";
import Product from "./model/productSchema.js";

const DefaultData =  async () => {

    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Default Data added Successfully!");
        
    } catch (error) {
        console.log("Error : ", error.message);
        
    }

}

export default DefaultData;