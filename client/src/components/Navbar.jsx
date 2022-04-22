

import  { AppBar,  Badge,  Button,  Toolbar, Typography, IconButton, Drawer, Box, ListItem, List } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link } from "react-router-dom";
import Login from './Login';
import { useContext, useState } from 'react';
import { LoginContext } from '../context/ContextProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import { Menu } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/actions/productActions.js';






const useStyles = makeStyles((theme) => ({
    bar : {
        backgroundColor : "#ffba08",
        boxShadow : "none",
        height : "9%",
        // ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        //     height: '7%'
        //   }
        
    },

    search: {
        position: 'relative',
        borderRadius: 'none',
        backgroundColor: "white",
        color : "#ffba08",
        marginLeft: 20,
        width: '45%',
        display : "flex",
      
        alignItems : "center"
       
      },
      searchIcon: {
        
         pointerEvents: 'none',
         color : "#000",
         marginLeft : "auto",
         marginRight: "2px"
         
       
      },
     
      inputInput: {
        padding: "0px 18px",
        marginRight : "auto",
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

        transition: theme.transitions.create('width'),

        width: '94%',
        // [theme.breakpoints.up('md')]: {
        //   width: '94%',
        // },
        fontWeight : "bold",
      
      },
      title : {
          padding :"2px 0.5% 2px 2%",
          fontSize : "1.5rem",
          fontWeight : "bold",
          fontFamily: 'Poppins, sans-serif',
          color :"#000",
          textDecoration : "none"
      },
      login : {
          marginLeft : "5%",
          backgroundColor : "#000",
          color : "#ffba08",
          fontWeight : "bold",
          fontFamily: 'Poppins, sans-serif',
          fontSize :"1rem",
          lineHeight :"1.5",
          width : "100px",
          height : "30px",
          borderRadius : "none",
          textTransform : "capitalize",
          border : "none",
          textAlign : "center"
     },

     more : {
         marginLeft : "58%",
         //paddingLeft : "12%",
         marginTop : '10%',
         paddingLeft : "20px",
         color : "#000",
         fontFamily: 'Poppins, sans-serif',
         fontSize :"1rem",
         fontWeight : "bolder",
         lineHeight :"1.5",
         textTransform : "capitalize",
         border : "none"

     },
     cart : {
        marginLeft : "78%",
        marginTop : '-26%',
        paddingLeft : "80px",
        color : "#000",
        fontFamily: 'Poppins, sans-serif',
        fontSize :"1rem",
        fontWeight : "bolder",
        lineHeight :"1.5",
        textTransform : "capitalize",
        
        border : "none"

     },
     shopicon :{
         padding : "5px"
     },
     menubutton :{
        display : 'none',
         [theme.breakpoints.down('sm')] : {
             display : 'block'
         } 

     },
     list: {
         width :250
    },
    menubuttons : {
        [theme.breakpoints.down('sm')] : {
            display : 'none'
        } 

    },
    cartintlist : {
        '& > *' : {
            color : "#000",
           // backgroundColor:'#ffab08',
            fontFamily: 'Poppins, sans-serif',
            fontSize :"1rem",
            fontWeight : "bolder",
            lineHeight :"1.5",
            textTransform : "capitalize",

        },
        width : '100%',
        padding : '86px',
        wordSpacing : 2,
        border : "none"

    },
    list :{
        position: 'absolute',
        color: '#ffba08',
        background :'#000',
        '& > *' :{
            fontWeight : 'bold',

        },
        top :'36px',
        


    }
     


}))



const Navbar = () => {
    const classes = useStyles();
   
    const [open, setopen] = useState(false);

    const loginClick = () => {
        setopen(true);
    } 

    const [drawer, setDrawer] = useState(false);

    const handleClose = () => {
        setDrawer(false);

    }
    const handleOpen =() => {
        setDrawer(true);
    }

    const list = () =>{
        return(
        <Box className={classes.cartintlist}>
            <List>
                <ListItem>
                
                <Box onClick={handleClose}>    
                <Link to='/cart'  style={{textDecoration : "none"}}>
                <Button  variant='contained' size='large' color="#ffab08" > <ShoppingCartIcon /> Cart</Button> </Link>
                </Box>

                </ListItem>
            </List>
        </Box>
        )


    }

const { account, setAccount} = useContext(LoginContext);
const { cartitems } = useSelector(state => state.cart);
const [show, setShow] = useState(true);



const { products }= useSelector(state => state.getProds);

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getProducts());

},[dispatch])

const [text, setText] = useState("");

const getText = (text) => {
    setText(text);
    setShow(false);

}



 
    return(
        <>
        <AppBar className={classes.bar}>
            <Toolbar>
                <IconButton
                color="inherit" className={classes.menubutton}
                onClick={handleOpen}
                >
                    <Menu />
                </IconButton> 
                <Drawer open={drawer} onClose={handleClose}>
                        {list()}
                </Drawer>



                <Link to='/' style={{textDecoration : "none"}}>
                <Typography className={classes.title}>eDukan</Typography>
                </Link>


               
                <div className={classes.search}>

                    
                <InputBase
                 placeholder="Search for various brands and more..."
                     className={classes.inputInput}
                     onChange={(e)=>getText(e.target.value)}
                />

                 <div className={classes.searchIcon}>
                     <SearchIcon />
                </div>
                {
                    text && 
                    <List className={classes.list} hidden={show}>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        
                                    <ListItem>
                                        <Link 
                                        to={`/product/${product.id}`} 
                                        onClick={() => setShow(true)}
                                        style={{ textDecoration:'none', color :'inherit'}}>
                                        {product.title.longTitle}
                                        </Link>
                                    </ListItem>
                                ))
                        }
                    </List>
                }


                 </div>






                { 
                account !=="" ?  <Profile account={account} setAccount={setAccount}/>
                  : <Button variant="contained" className={classes.login} onClick={()=>{loginClick()}}>Login</Button>
                }
                <Box className={classes.menubuttons}>
                <Button className={classes.more}>More</Button>

                <Link to='/cart'  style={{textDecoration : "none"}}>
                <Button className={classes.cart}>
                
                <Badge badgeContent={cartitems.length} color="secondary" size="small">
                <ShoppingCartIcon className={classes.shopicon}/> 
                </Badge>

                 Cart</Button>

                 </Link>

                 </Box>
                

            </Toolbar>

        </AppBar>

        <Login open={open} setopen={setopen} setAccount={setAccount}/>
        </>
    );
}

export default  Navbar;