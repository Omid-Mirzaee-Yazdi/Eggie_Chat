import React,{useState, useEffect} from 'react'
import Message from './Message';
import { Button, FormControl, Input, InputLabel, Card, CardContent, Typography } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';
import db from './conn';

function ChatRoom(props) {

    const[input, setInput]=useState('');
    const[msg, setmsg]=useState([]);

    useEffect(() => {
        db.collection(props.pointer).orderBy('timestamp','desc').onSnapshot(snapshot=>{
          setmsg(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
        })
      }, [])
    
    const sendmsg = (event)=>{
        event.preventDefault();
        db.collection(props.pointer).add({
          message: input, 
          color: props.clr,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
      }
    
    return (
        <Card className='maincardchat' variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.pointer}
                </Typography>
                <br />
                <br />
                    <form>
                        <FormControl>
                            <InputLabel htmlFor="my-input">msg</InputLabel>
                            <Input value={input} onChange={event=>setInput(event.target.value)} aria-describedby="my-helper-text" />
                            <Button disabled={!input} type='submit' onClick={sendmsg}>send</Button>
                        </FormControl>
                    </form>


                    <FlipMove>
                        {
                        msg.map((arg)=>(
                            <Message key={arg.id} colormsg={arg.data.color} colorusr={props.clr} cont={arg.data.message} />
                        ))
                        }
                    </FlipMove>
                    
            </CardContent>

        </Card>
    )
}

export default ChatRoom
