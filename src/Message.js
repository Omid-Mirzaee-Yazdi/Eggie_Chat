import React, {forwardRef} from 'react'
import { Button, FormControl, Input, InputLabel, Card, CardContent, Typography } from '@material-ui/core';
import "./App.css";



const FunctionalArticle = forwardRef((props, ref) => {
    let clss="msgcard "
    if(props.colormsg===props.colorusr){
        clss+="owner"
    }
    
    return(
    <Card ref={ref} className={clss} style={{backgroundColor: props.colormsg}} variant="outlined">
        <CardContent >
            <Typography variant="h6" component="h6">
                {props.cont}
            </Typography>
        </CardContent>
    </Card>

  )});




export default FunctionalArticle
