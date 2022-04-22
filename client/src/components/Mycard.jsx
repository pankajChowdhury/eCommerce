import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image : {
        height : "60px",
        width : "60px"
    },
    caption :{
        textAlign : "center",
        fontWeight : "bold",
        paddingTop : "0px",
        fontSize : "0.85rem"

    }

})


const Mycard = (props) => {
    const classes = useStyles();

    return(
        <div>
            <img src = {props.url} alt='image'  className={classes.image}/>
            <Typography className={classes.caption}>{props.text}</Typography>
        </div>
    )
    
}
export default Mycard;