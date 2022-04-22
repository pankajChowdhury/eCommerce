import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    component : {

        margin: "80px 140px",
        width : '80%',
        background : "#ffab08",
        height: "65vh",
        [theme.breakpoints.down('sm')] : {
            margin: "80px 70px"
        }

    },
    image : {
        width : "15%"

    },
    container : {
        textAlign : "center",
        paddingTop : 70,
        '& > *'  : {
            marginTop :10,
            fontSize: 14
        }
    },
    button: {
        marginTop :20,
        padding: "12px 70px",
        borderRadius : 2,
        fontSize: 14,
        background: "#000",
        color:'#ffab08'
    
    }
}));


const EmptyCart = () => {

    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyles();
    const history = useHistory();
    const addItems = () => {
        history.push('/');

    }


    return(
        <Box className={classes.component}>
            <Box className={classes.container}>
            <img src={emptycarturl} alt="Empty Cart" className={classes.image}/>
            <Typography>Your Cart is Empty</Typography>
            <Typography>Add items to it now</Typography>
            <Button variant="contained" color="primary" onClick={()=>addItems() } className={classes.button}>Shop Now</Button>
            </Box>
          
        </Box>
    )

}
export default EmptyCart ; 