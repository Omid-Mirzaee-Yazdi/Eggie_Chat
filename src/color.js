import React,{useEffect,useState} from 'react'
import {Button,Card,CardContent,Typography} from '@material-ui/core';
import firebase from 'firebase';
import db from './conn';

function Color(props) {
    
    const sendclr = (color)=>{
        props.setstate(color);
      }

    const randomclr=()=>{
        let result           = '#';
        let characters       = '1234567890abcdef';
        let charactersLength = characters.length;
        for ( let i = 0; i < 6; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const btncreator=(data)=>{

            const clr=randomclr();
            return (
                <Button
                variant="contained"
                onClick={()=>sendclr(clr)}  
                className="colorbtn"
                style={{backgroundColor: clr}} 
            />
            )
        
    }

    return (
        <Card className='maincard' variant="outlined">
            <CardContent>
            <Typography variant="h5" component="h2">
                Pick your color
            </Typography>
            <Typography color="textSecondary">
                This will be your only identifier!
            </Typography>

                <br />
                {
                ["","","","","","","",""].map((a)=>(
                    btncreator()
                ))
                }
                
            </CardContent>
        </Card>

    )
}

export default Color
