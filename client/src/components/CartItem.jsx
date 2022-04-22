import { Card , Box, makeStyles, Typography, Button } from "@material-ui/core";
import clsx from 'clsx';
import GroupofButton from "./GroupofButton";

const useStyles = makeStyles({
    component: {
        display : "flex",
        borderRadius : 0,
        borderTop : "1px solid #f0f0f0"


    },
    left :{
        margin: 20,
        display : "flex",
        flexDirection : "column"

    },
    right : {
        margin: 20

    },
    smallText : {
        fontSize: 14
    },
    greyText : {
        color: "#878787"
    },
    price :{
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        height: 110,
        width : 110,

    },
    remove: {
        marginTop: 20,
        fontSize: 16,

    }

})

const  CartItem = ({ item, removeItemfromCart }) => {
    const classes= useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return(
        <Card className={classes.component}>
            <Box className={classes.left}>
               <img src={item.url} className={classes.image}/>
               <GroupofButton />

            </Box>
            <Box className ={classes.right}>

                <Typography>{item.title.longTitle}</Typography>
                <Typography  className= {clsx(classes.smallText, classes.greyText)}style={{marginTop: 10}}>Seller: SuperComNet
                <span><img src={fassured} alt="image" style={{width : 50, marginLeft: 10}}/> </span>
                </Typography>
                <Typography style={{ margin : "20px 0px"}}>
                    <span className={classes.price}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyText}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{color: "#388E3C"}}>{item.price.discount} off </span>
                </Typography>
                <Button className={classes.remove} onClick={()=>removeItemfromCart(item.id)}>REMOVE

                </Button>

            </Box>
        </Card>
    )

}
export default CartItem;
