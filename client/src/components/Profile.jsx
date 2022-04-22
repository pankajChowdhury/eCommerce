
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "react-router-dom";

const useStyles=makeStyles({
    acc : {

        marginLeft : "5%",
        marginRight : "2%",
        color : "#fff",
        // fontFamily: 'Poppins, sans-serif',
        fontSize :"1.1rem",
        lineHeight :"1.5",
        textTransform : "none",
        cursor: "ponter",
        border : "none",
        textDecoration : "none"
     },
     menu : {
         marginTop : 40
     },
     logout: {
         marginLeft:20,

     }
})

const Profile = ({account, setAccount}) => {
    const classes=useStyles();

    const [open, setopen] = useState(false);

    const handleClose = () => {
        setopen(false);
    }

    const handleClick = (event) => {
        setopen(event.currentTarget);
    }
    const logout = () => {
        setAccount("");
    }

    return(
    <>
       <Link className={classes.acc} to='/'> 
       <Typography onClick = {handleClick} style={{fontSize:"1.1rem", fontWeight:"bold"}}>{account}</Typography>
       </Link>
        <Menu
           
            anchorEl={open}
             open={Boolean(open)}
             onClose={handleClose}
             className={classes.menu}
        >
            <MenuItem onClick={() =>{handleClose(); logout(); }}> <PowerSettingsNewIcon fontSize="small" color="primary"/> 
            <Typography classname={classes.logout}> Logout </Typography>
            </MenuItem>
           
        </Menu>

    </>
    )

}
export default Profile;