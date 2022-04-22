
import User from "../model/userSchema.js";


export const  addUser = async (request,response) => {
    try {
       // console.log("addUser");

        const exist  = await User.findOne({username : request.body.username})

        if(exist){
            //console.log("User already registered");
            //alert("User already Registered");
            return response.status(401).json("User already Registered!");
         
        }else{
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        //alert("Successfully Registered. Please Login Now");
        response.status(200).json("user is successfully registered!")
        }
        
    } catch (error) {
        console.log("Error: ", error.message);
    }





}
export const userLogin = async(request, response) => {
    try{
        let user = await User.findOne({username: request.body.username, password: request.body.password})
        if(user){
            return response.status(200).json(`${request.body.username} login successful` );
        }else{
            return response.status(401).json('Invalid Login Credentials');
            
        }

    }
    catch(error){

        console.log("Error: ", error.message)
    }
}