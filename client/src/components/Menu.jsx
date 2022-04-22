
import { Box, makeStyles, Typography } from '@material-ui/core';
import { navData } from './constants/data.js';
import Mycard from './Mycard'


const useStyles =  makeStyles( theme => ({
    menubar : {
      marginTop : "65px",
      background : '#ffba08',
      color:'#000',
      display : "flex",
     justifyContent : "space-between",
     margin : "2px 40px",
     padding : "5px 12px",
    overflowX : "overlay",
    [theme.breakpoints.down('md')] : {
        margin: 0
    }
     
    }
  }));

const Menu = () =>{
    const classes = useStyles();

    return(
        <Box className={classes.menubar}>

        {
            navData.map((navDataitem)=> {
                return (
                 <Mycard url={navDataitem.url} text={navDataitem.text}/>
                

                )
            })

        }
        

        </Box>
        
        
     
    )
}
export default Menu;