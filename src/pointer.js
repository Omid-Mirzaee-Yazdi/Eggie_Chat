import React,{useState} from 'react'
import { Button, FormControl,TextField } from '@material-ui/core';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
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
                    <div>
                        <TextField 
                        id="outlined-basic" 
                        className="inputpointer" 
                        value={inp} 
                        onChange={event=>setInput(event.target.value)}  
                        label="Room Pointer" 
                        variant="outlined"
                        size="small" />
                        <Button
                            variant="contained"
                            onClick={sendpointer}  
                            disabled={!inp} 
                            type='submit'
                            className="submitbtn"
                        >
                        <MeetingRoomRoundedIcon/>  
                        </Button>
                    </div>

                    </FormControl>
                </form>
            </CardContent>
        </Card>

    )
}

export default Pointer
