import { Dialog, DialogContent, TextField, Typography, Button} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Box } from '@material-ui/core';
import { useState } from "react";
import { submitRegUserData, checkLogincreds } from "../service/api";

const imageUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";


const useStyles = makeStyles(theme=> ({
    dialogbox : {
        display : "flex",
        height : "70vh",
        width : "100vh",
        margin : "auto",
        padding : "0px"

    },
    leftbox : {
        width : "30%",
        height : "100%",
        backgroundColor : "#2874f0",
        background : `url(${imageUrl})`,
        backgroundRepeat : "no-repeat",
        backgroundPosition : "center 85%",
        '& > *' : {
            color : "#ffffff",
            fontWeight : "bold"
        },
        padding : "62px 25px",
       
    },
    login : {
        width : "70%",
        height : "100%",
        padding: "25px 35px",
        display : "flex",
        background: '#ffab08',
        flex : 1,
        flexDirection : "column",
        "& > *" : {
            marginTop : "20px"
        },
       

       
    },
    text :{
        color: "#878787",
        fontSize: 12

    },
    loginBtn : {
        textTransform : "none",
        background : "#000",
        color:'#ffab08',
        borderRadius : 0,
        height :  48,
        fontSize : 18

    },
    reqBtn : {
        textTransform : "none",
        background : "#ffffff",
        color: "blue",
        borderRadius : 0,
        height :  48,
        fontSize : 15,
        fontWeight : "bold",
        boxShadow : "3px 2px 4px 0 rgba(0,0,0, 0.2)",
      

    },
    createText : {
        textAlign : "center",
        marginTop : "auto",
        fontSize : 14,
        color: "blue",
        fontWeight : "600",
        cursor : "pointer"

    },
    register : {
        width : "70%",
        height : "100%",
        padding: "0px 35px",
        display : "flex",
        background: '#ffab08',
        flex : 1,
        flexDirection : "column",
        "& > *" : {
            marginTop : "18px"
        }

    },
    error : {
        fontSize: 12,
        color: "red",
        marginTop : 0
    }

}));

const  Login = ({open, setopen, setAccount}) => {
    const classes = useStyles();
    const  Initialvalues = {
        view : "login",
        title : "Login",
        text  : "Get acces to your Orders, Wishlists and Recommendations"
    }     
    const [option, setoption] = useState(Initialvalues);
    const toggleOption = () => {

    const regOption = {
        view : "register",
        title : "Register",
        text  : "Looks like you are new here! No Problem Just register to start."

    }
         setoption(regOption) 
    }
    

    const registerInitialvalues =  {
        firstname : "",
        lastname : "",
        email : "",
        password : '',
        username : "",
        phone: "",
    }

    const loginIntialvalues  = {
        useraname : "",
        password : ""
    }

    const [regData, setregData] = useState(registerInitialvalues);
    const [loginData, setLoginData]  = useState(loginIntialvalues);
    const [error, setError] =  useState(false);

    const handleClose = () => {

        setopen(false);
        setError(false);
        setoption(Initialvalues);
    }

    const handleChange = (event) => {
        setregData({...regData, [event.target.name]:event.target.value});
        console.log(regData);

    }

    const handleloginChange = (event) =>{
        setLoginData({...loginData, [event.target.name]: event.target.value});
    }
    const submitData =  async () => {
       const response = await  submitRegUserData(regData);
       console.log(response);
       if(!response) return;
       handleClose();
       setAccount(regData.username);
        
    }

    const handleLoginClick = async () => {
        const  response  =  await checkLogincreds(loginData);
        if(!response)  {
            setError(true);
            return;
        }
        handleClose();
        setAccount(loginData.username);

    }
    return(

    <Dialog open={open} onClose={handleClose}>
        <DialogContent  className={classes.dialogbox} >
            <Box className={classes.leftbox}>
                <Typography variant="h6">{option.title}</Typography>
                <Typography style={{paddingTop : "12px"}}>{option.text}</Typography>

            </Box>
            {
                option.view === "login" ?
            <Box className={classes.login}>
                <TextField name="username" label="Enter Username" onChange={(e)=>{handleloginChange(e)}}/> 
                <TextField name="password" label="Enter Password" onChange={(e)=>{handleloginChange(e)}}/>
                { error && <Typography className={classes.error}> Invalid Username or Password </Typography>}
                <Typography className={classes.text}>By continuing,You agree to eDukan's terms of use and Privacy Policy</Typography>
                <Button varaint="contained" className={classes.loginBtn} onClick={()=>{handleLoginClick()}}>Login</Button>
                <Typography style={{textAlign: "center"}}>OR</Typography>
                <Button varaint="contained" className={classes.reqBtn}>Request OTP</Button>
                <Typography className={classes.createText} onClick={()=>{toggleOption()}}>New to eDukan? Create an account</Typography>

            </Box> : 
            <Box className={classes.register}>
            <TextField name="firstname" label="Enter Firstname" onChange={(e)=>{handleChange(e)}}/>
            <TextField name="lastname" label="Enter Lastname" onChange={(e)=>{handleChange(e)}}/>
            <TextField name="username" label="Enter Username" onChange={(e)=>{handleChange(e)}}/>
            <TextField name="email" label="Enter Email"  onChange={(e)=>{handleChange(e)}}/>
            <TextField name="password" label="Enter Password" onChange={(e)=>{handleChange(e)}}/>
            <TextField name="phone" label="Enter Phone Number" onChange={(e)=>{handleChange(e)}}/>
            <Button varaint="contained" className={classes.loginBtn} onClick={()=>submitData()}>Sign Up</Button>
           
            </Box>
            
            }
        </DialogContent>
    </Dialog>
    )

}
 export default Login;