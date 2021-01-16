import React, {forwardRef} from 'react'
import { Button, FormControl, Input, InputLabel, Card, CardContent, Typography } from '@material-ui/core';
import "./App.css";


const FunctionalArticle = forwardRef((props, ref) => (
    
    <Card ref={ref} className={props.colormsg+" msgcard"}  variant="outlined">
        <CardContent >
            <Typography variant="h6" component="h6">
                {props.cont}
            </Typography>
        </CardContent>
    </Card>

  ));




export default FunctionalArticle
