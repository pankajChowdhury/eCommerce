import axios from 'axios';
const url = "";

export const submitRegUserData = async (user) => {
    try{

    return await axios.post(`${url}/signup`, user);

   // console.log("Data registered Succesfully! ");

    }catch(error){
        console.log("Error: ", error.message);
    }

}

export const checkLogincreds  = async(user) => {
    try{
        return await axios.post(`${url}/login`, user);

    }catch(error){
        console.log("Error : ", error.message);
    }

}

export const payUsingPaytm = async(data) =>{
    try {
       let response = await axios.post(`${url}/payment`, data);
       return response.data;
    } catch (error) {
        console.log("Error while calling Paytm API", error);
        
    }

}