import { useEffect } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../redux/actions/productActions';
import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Typography, Grid} from '@material-ui/core';
 import clsx  from 'clsx';
 import Badge from '@material-ui/icons/LocalOffer';
import Actionitems from './Actionitems';


const useStyles = makeStyles(theme =>({
        component : {
            marginTop : 55,
            backgroundColor : "#ffab08"
        },
        container : {
           // margin : '0 80px',
            backgroundColor : "#000",
            display : "flex",
            color : '#ffab08',
            [theme.breakpoints.down('md')] : {
                margin: 0
            }

        },
        rightContainer : {
            marginTop : 60,
            "& > * " : {
                marginTop : "10px",
                paddingLeft: '25px'
            } 
        },
        smallText : {
            fontSize : 14,
            verticalAlign : "baseline",
            '& > *' : {
                fontSize :14,
                marginTop : 10
            }
        },
        greyColor : {
            color : "#878787"  //878787
        },
        price :{
            fontSize : 48,
          
        },
        badge : {
            fontSize: 18,
            marginRight : 10,
            color :"#00CC00"
        }
}));


const DetailView = ({match }) => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const { product } = useSelector(state => state.getProdDetails);
    const date = new Date(new Date().getTime() + (5 * 24 * 60*60*1000 ));

    
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(getProductDetail(match.params.id))

    },[dispatch])

    return(
        <Box className={classes.component}>
            { product && Object.keys(product).length &&
                <Grid container className={classes.container}>

                     <Grid item  lg={4} md={4} sm={8}  xs={12} >
                            <Actionitems product={product}/>
                    </Grid>
                    <Grid item  lg={8} md={8} sm={8}  xs={12} className={classes.rightContainer}>
                            <Typography>{product.title.longTitle}</Typography>
                            <Typography className={ clsx(classes.smallText, classes.greyColor)}>
                                8 ratings and 1 review
                                <span style ={{ color : '#ffab08', fontWeight : 'bold', lineHeight:'1.5', fontSize:'1.5rem'}}>  &nbsp;&nbsp;&nbsp;eDukan </span>
                            </Typography>
                            <Typography>
                                <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                                <span className={classes.greyColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                                <span style={{color : "#388C3C"}}>{product.price.discount} off</span>
                            </Typography>
                            <Typography style={{marginTop: 20, fontWeight: 600}}> Available Offers
                            </Typography>
                            <Box className={classes.smallText}>
                                <Typography> <Badge className={classes.badge}/>Special Price Get 10% Off (price inclusive of discount)</Typography>
                                <Typography> <Badge className={classes.badge}/>Bank Offers : 5% Unlimited Cashbacks on Flipkart Axis Bank Credit Cards</Typography>
                                <Typography> <Badge className={classes.badge}/>bank Offer Flat ₹100 Off on First Flipkart Pay Later Order of ₹500 and Above </Typography>
                                <Typography> <Badge className={classes.badge}/>Combo Offer: Buy 2 Items and save 5% Buy 3 or more and save 10% See all Products</Typography>
                            </Box>
                            <Table>
                                <TableBody>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyColor}>Delivery</TableCell>
                                        <TableCell style={{fontWeight:"bold", color:'#ffab08'}}>{date.toDateString()} | ₹40 </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyColor}>Warranty</TableCell>
                                        <TableCell style ={{ color:'#ffab08'}}>No warranty</TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyColor}>Seller</TableCell>
                                        <TableCell className={classes.smallText}>
                                            <span style={{color:"#2874f0"}}>SuperComNet</span>
                                            <Typography style={{ color:'#ffab08'}}>GST Invoice Available</Typography>
                                            <Typography style={{ color:'#ffab08'}}>14 days Return Policy</Typography>
                                            <Typography style={{ color:'#ffab08'}}>View more Sellers </Typography>
                                        </TableCell>
                                    </TableRow>
                                
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyColor}>Description</TableCell>
                                        <TableCell   style={{ color:'#ffab08'}}>{product.description}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                    </Grid>

                 </Grid >
            }
        </Box>
    )

}
export default DetailView;