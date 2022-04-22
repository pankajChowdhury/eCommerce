import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
        firstname : {
                type : String,
                min: 5,
                max : 25,
                required : true
        },
        lastname : {
                type : String,
                min: 5,
                max : 25,
                required : true
        },
        email : {
                type : String,
                required : true,
                lowercase : true,
                unique : true
        },
        password : {
                type : String,
                required : true
                
        },
        username : {
                type : String,
                required : true,
                unique: true,
                index : true
        },
        phone: {
                type: String,
                required : true
        }
})

const User = mongoose.model('user', userSchema);

export default  User;