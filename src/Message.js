import React, {forwardRef} from 'react'
import { Button, FormControl, Input, InputLabel, Card, CardContent, Typography } from '@material-ui/core';
import "./App.css";



const FunctionalArticle = forwardRef((props, ref) => {
    let clss="guestmsg "
    if(props.colormsg===props.colorusr){
        clss="ownermsg"
    }
    return(
        <div style={{width: "100%", display:"flow-root"}}>
            <Card ref={ref} className={clss} style={{backgroundColor: props.colormsg}} variant="outlined">
                <CardContent >
                    <Typography variant="h6" component="h6">
                        {props.cont}
                    </Typography>
                </CardContent>
            </Card>
        </div>


  )});




export default FunctionalArticle
