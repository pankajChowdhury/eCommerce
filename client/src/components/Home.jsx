
import Menu from './Menu';
import Banner from './Banner';
import Slide from './Slide';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Midsection from './Midsection';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/actions/productActions.js';

const useStyles = makeStyles( theme=> ({
    imagewrapper : {
        backgroundColor : "#000",
        padding : "8px",
        margin  :"12px 0px 0px 0px",
        height  : "253px",
        [theme.breakpoints.down('md')] : {
            display: 'none'
        }

    },
    slide : {
        width : "83%",
        [theme.breakpoints.down('md')] : {
            width : "100%"
        }
    }

}));

const Home = () => {
    const classes = useStyles();

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const { products }= useSelector(state => state.getProds);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getProducts())

    },[dispatch])

    return(
        <>
        <Menu />
        <Banner/>
        <Box style={{display : "flex", backgroundColor : "#000"}}>
            <Box className={classes.slide}>
                <Slide timer={true} heading="Deal of the Day" productList={products}/>
            </Box>
            <Box className={classes.imagewrapper}>
                 <img  src={adURL} style={{width : 200, height: 250, background : '#000'}} alt="ad"/>
            </Box>
            
          

        </Box>

           <Midsection />

            <Box  style={{backgroundColor : "#000" , padding :"0.2px"}}>
            <Slide timer={false} heading="Discounts for You" productList={products}/>
            </Box>
            <Box  style={{ backgroundColor : "#000", padding :"0.2px"}}>
            <Slide timer={false} heading="Suggested items" productList={products}/>
            </Box>
            <Box  style={{ backgroundColor : "#000", padding :"0.2px"}}>
            <Slide timer={false} heading="Top Selections" productList={products}/>
            </Box>
            <Box  style={{ backgroundColor : "#000", padding :"0.2px"}}>
            <Slide timer={false} heading="Most Recommended" productList={products}/>
            </Box>
            <Box style={{ backgroundColor : "#000", padding :"0.2px"}}>
             <Slide timer={false} heading="Bestsellers" productList={products}/>
            </Box>
           
        
   
        </>
    )
}

export default Home;