import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, makeStyles, Typography, Grid } from '@material-ui/core';
import  { removefromCart } from '../redux/actions/cartActions';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';
import { payUsingPaytm } from "../service/api.js";
import { post } from '../utils/paytm.js';

const useStyles = makeStyles(theme => ({
    component : {
       // marginTop : 60,
        padding : ' 30px 135px',
        display : "flex",
        //background : '#ffab08',
        [theme.breakpoints.down('sm')] : {
            padding : "15px 0px"
        }

    },
    left: {
       // width : "67%",
        background : '#ffab08',

       [theme.breakpoints.down('sm')] : {
        marginBottom : "15px"
    }


    },
    right : {

    },
    header : {
        padding : "15px 24px",
      
    },
    placeorder : {
        background : "#000",
        color: "#ffab08",
        borderRadius : 2,
        width : 250,
        height: 50,
        display: "flex",
        marginLeft:"auto"

    },
    bottom : {
        padding: "16px 22px",

        borderTop :  "1px solid #f0f0f0",
        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)"

    }

}));


const Cart = () => { 
    const { cartitems } = useSelector(state=> state.cart);
    const classes =useStyles();
    const dispatch = useDispatch();

    const removeItemfromCart = (id) => {
        console.log(id);
        dispatch(removefromCart(id));

    }

    const buyNow = async () => {
        let response =  await payUsingPaytm({amount: 500, email:'pankajchowdhury091220@gmail.com'});
        let info = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response
        }
        post(info);
 }



    useEffect(()=> {
        console.log(cartitems);

    })
    return(
        <>
        {
            cartitems.length > 0 ?  
            <Grid container className={ classes.component}>
                <Grid  item lg={9} md={9} sm={12} xs={12} className={classes.left}>
                    <Box className={classes.header}>
                        <Typography  style={{fontWeight:"bold", fontSize:18}}>My Cart ( {cartitems.length} )</Typography>
                    </Box>
                    {
                        cartitems.map( item => {
                            return(
                                <CartItem  item={item} removeItemfromCart={removeItemfromCart} />
                            )
                        })
                    }
                    <Box className={classes.bottom}>
                        <Button onClick={()=> buyNow()}variant="contained" className={classes.placeorder}>Place Order</Button>
                    </Box>

                </Grid>
                <Grid item  item lg={3} md={3} sm={12} xs={12}  > 
                    <TotalView cartitems={cartitems}/>
                </Grid>

              
           
            </Grid>


            : 
            
            <EmptyCart />
           
        }
        </>
    )
}
export default Cart;
