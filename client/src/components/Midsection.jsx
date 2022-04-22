
import { imageURL } from "./constants/data";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    wrapper : {
        display : "flex",
        justifyContent: "space-between",
        backgroundColor : "#ffab08",
        padding: "10px 0px 20px 0px"
    },
    adimage : {
        [theme.breakpoints.down('md')] : {
            objectFit : 'cover',
            height : 130
        }

    }
}));

const Midsection = () => {
    const classes= useStyles();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Grid  lg={12} sm={12} md={12} container className= {classes.wrapper}>
            {
                imageURL.map(image => {
                    return(
                        <Grid item  lg={4} md={4} sm={12}>
                        <img src={image} style={{ width: "100%"}}/> 
                        </Grid>
                    )
                })
            }
        </Grid>
        <Box style={{marginTop: "20px", background:"#f2f2f2"}}>
            <img  className={classes.adimage} src ={coronaURL} style={{width : "99%", padding: "12px 5px 0px 5px", background: '#ffab08'}}/>
        </Box>
        </>
    )

}
export default Midsection;