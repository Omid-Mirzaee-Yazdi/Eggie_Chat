import React,{useState} from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./App.css";

function Pointer(props) {

    const[inp, setInput]=useState('');
    const useStyles = makeStyles({
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
    const classes = useStyles();
    const sendpointer = (event)=>{
        event.preventDefault();
        props.setstate(inp);
        setInput('');
      }


    return (

        <Card className='maincard' variant="outlined">
            <CardContent>
            <Typography variant="h5" component="h2">
                Mango Anonymous Chat
            </Typography>
            <br />
            <Typography className={classes.pos} color="textSecondary">
                keep the community clean! <br />
                we hold no responsibility for your action!

            </Typography>

                <br />
                <form>
                <FormControl>
                        <InputLabel htmlFor="my-input">Enter your room pointer</InputLabel>
                        
                        <Input className="inputpointer" variant="outlined" value={inp} onChange={event=>setInput(event.target.value)} />
                        <Button
                            variant="contained"
                            onClick={sendpointer}  
                            disabled={!inp} 
                            type='submit'
                        >
                            Enter
                        </Button>
                    </FormControl>
                </form>
            </CardContent>
        </Card>

    )
}

export default Pointer
