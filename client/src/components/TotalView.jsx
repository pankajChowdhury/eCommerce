import { Box, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    component : {
      //  width : "30%",
        background : "#ffab08",
        marginLeft: 15,
    },
    header : {
        padding: "16px 24px",
        borderBottom : "1px solid #f0f0f0"
    },
    container: {
        padding: "15px 24px",
        '& > *' : {
            marginTop : 20,
            fontSize: '14'
        }

    },
    greycolor :{
        color: "#878787"
    },
    price : {
        float: "right"
    },
    total : {
        fontSize: 18,
        fontWeight: 600,
        borderTop : "1px dashed #e0e0e0",
        padding:"20px 0",
        borderBottom : "1px dashed #e0e0e0",

    }
})


const TotalView = ({cartitems}) => {
    const classes = useStyles();
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    useEffect(()=> {
            totalAmount();
    },[cartitems])
    const totalAmount = () => {
        let pc=0;
        let disc=0;
        cartitems.map(item => {
            pc+=item.price.mrp;
            disc+=(item.price.mrp - item.price.cost)
        })
        setPrice(pc);
        setDiscount(disc);

    }




    return(
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greycolor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.container}>
            <Typography>Price ({cartitems.length} item) <span className={classes.price}>₹{price}</span></Typography>
            <Typography>Discount <span className={classes.price}>-₹{discount}</span> </Typography>
            <Typography>Delivery Charges  <span className={classes.price}>₹40</span> </Typography>
            <Typography className={classes.total}>Total Amount  <span className={classes.price}>₹{price-discount+40}</span></Typography>
            <Typography style={{color:"green"}}>You will save ₹{discount - 40} on this order</Typography>

            </Box>
        </Box>

    )
}
export default TotalView;