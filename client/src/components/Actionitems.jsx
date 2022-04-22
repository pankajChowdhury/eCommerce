import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { payUsingPaytm } from "../service/api";
import { post } from '../utils/paytm';

const useStyles = makeStyles({
    leftContainer : {
        padding : '40px 0 0 80px',
        height : "100%"
    },
    image :{
        padding: "15px 20px",
        border : "1px sold #f0f0f0",
        width : "300px",
        height : "400px"


    },
    cartBtn : {
        height : 40,
        width:"46%",
        backgroundColor : "#ff9f00",
        color: "#fff",
        marginRight : 10,
        borderRadius : 0,
        fontWeight: "bold"

    },
    buyBtn :  {
        height : 40,
        width : "46%",
        backgroundColor: "#fb641b",
        color : "#fff",
        borderRadius : 0,
        fontWeight: "bold",
        

    }
})

const Actionitems= ({ product }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const addthisToCart = () => {

        dispatch(addToCart(product.id));
        history.push('/cart');
    }

    const buyNow = async () => {
           let response =  await payUsingPaytm({amount: 500, email:'pankajchowdhury091220@gmail.com'});
           let info = {
               action: "https://securegw-stage.paytm.in/order/process",
               params: response
           }
           post(info);
    }
    return(
        <Box className={classes.leftContainer}>
        <img src={product.detailUrl} alt="productImage" className={classes.image} />
        <br/>
        <Button variant ="contained"className={classes.cartBtn} onClick={()=> {addthisToCart()}}><ShoppingCartIcon/>Add to Cart</Button>
        <Button variant ="contained"className={classes.buyBtn} onClick={()=> buyNow()}> <FlashOnIcon />Buy Now</Button>
        </Box>
    )
}
export default Actionitems;