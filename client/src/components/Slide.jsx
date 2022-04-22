import Carousel from "react-multi-carousel";
import { Box, Button, Divider, Typography } from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/styles";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

    image : {
        height : 80,
        width : 80,
      
       
    },
    head : {
        display : "flex",
        padding :  "10px 15px",
        background : '#ffab08',
        color : '#000'
    },
    title :{

       
        fontWeight : "bold",
        fontSize  : 18,
        lineHeight : 1.5

    },
    time : {
        height :  25,
        weight : 25,
        paddingTop : "3px",
        paddingLeft : "12px"
     

    },
    slider : {
        margin : "12px 10px",
        backgroundColor : "#ffab08"

    },
    count : {
        display : "flex",
        alignItems :'center',
        paddingLeft : "6px",
        color : "#7f7f7f",
        fontSize : "15px"

    },
    button : {
        marginLeft : "auto",
        backgroundColor : "black",
        fontWeight : "bold",
        color : "#ffab08",
        borderRadius : "2px",
        fontSize : "10px"
    },
    text : {
        fontSize : "12px",
        marginTop : 5
    },
    wrapper :{
        padding : "25px 15px"
    }
})

const Slide = ({heading,productList,timer}) => {
    const classes = useStyles();

    const responsive = {
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer =({hours, minutes, seconds}) => {
        return <span className={classes.count}>{hours} : {minutes} : {seconds} Left</span>
    }
    
    return(
    <Box className={classes.slider}>
        <Box className={classes.head}>

          <Typography className={classes.title}>{heading}</Typography>
            {
            timer && 
            <>
            <img src = {timerURL} alt="time-image" className={classes.time}/>
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
            </>
            }

            <Button variant="contained" color='secondary'
            className={classes.button}>VIEW ALL</Button>
    
       </Box>
       <Divider />
    <Carousel
     responsive={responsive}
     swipeable={false}
     draggable={false}
     infinite={true}
     autoPlay={true}
     autoPlaySpeed={10000}
     keyBoardControl={true}
     centerMode={true}
     showDots={false}
     //removeArrowOnDeviceType={["tablet", "mobile"]}
     dotListClass="custom-dot-list-style"
     itemClass="carousel-item-padding-40-px"
     containerClass="carousel-container"
    >
        {
            productList.map( prod => {
                //console.log(prod);

                return  (
                    <Link to={`product/${prod.id}`} >
                    <Box textAlign="center" className={classes.wrapper} >


                            <img src = {prod.url}  alt="product-image" className={classes.image}/>
                            <Typography className={classes.text} style={{fontWeight: "bold", color:"#212121"}}>{prod.title.shortTitle}</Typography>
                            <Typography className={classes.text}style={{color:"green"}}>{prod.discount}</Typography>
                            <Typography className={classes.text}style={{ color:"#212121", opacity: 0.6}}>{prod.tagline}</Typography>
                     </Box>
                     </Link>
                    
                )
            })
        }

    </Carousel>

    </Box>
   )

}
export default Slide;