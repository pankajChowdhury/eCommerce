
import { Box, makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "./constants/data";

const useStyles = makeStyles(theme=>({
images : {
width: "100vw",
height : "280px",
[theme.breakpoints.down('sm')] : {
    objectFit : 'cover',
    height: 180
}

},
container : {
padding : 10,
backgroundColor : "#000",
marginRight : 0,
marginLeft : 0,

},
carousel : {
marginTop : 10,
marginRight : 0,
marginLeft : 0,

}
}));

const Banner = () => {
const classes = useStyles();
return(
<Box className={classes.container}>
<Carousel className={classes.carousel} autoPlay={true} animation ='slide' indicators={false} navButtonsAlwaysVisible={true} cycleNavigation={true}
navButtonsProps = {
{
style : {
background : "#ffab08",
color : "#000",    //494949
borderRadius : 0,
margin : 0,
}
}
}
>
{
bannerData.map(image => {
return(
< img src={image} alt="banner" className={classes.images} />
)
})

}
</Carousel>
</Box>
)
}
export default Banner;
