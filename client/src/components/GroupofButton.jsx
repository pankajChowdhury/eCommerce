import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState } from "react";


const useStyles = makeStyles({
    component : {
        marginTop: 30

    },
    button :{
        borderRadius : "50%" 
    }

})


const GroupofButton = () => {
    const classes = useStyles();
    const [counter, setCounter]= useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter+1);

    }
    const handleDecrement = () => {
        setCounter(counter => counter-1)
        
    }


    return(
        <ButtonGroup className={classes.component}>
            <Button className={classes.button} onClick={()=>{handleDecrement()}} disabled={counter===1}>-</Button>
            <Button>{counter}</Button>
            <Button className={classes.button} onClick={()=>{handleIncrement()}}>+</Button>
        </ButtonGroup>
    )

}
export default GroupofButton;