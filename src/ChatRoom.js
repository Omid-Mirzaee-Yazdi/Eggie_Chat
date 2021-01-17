import React,{useState, useEffect} from 'react'
import Message from './Message';
import { Button, FormControl, Card,TextField, CardContent, Typography } from '@material-ui/core';
import Send from '@material-ui/icons/Send';

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
                    <hr />
                </Typography>
            
                    <div className="chatsec">
                        <FlipMove>
                            {
                            msg.map((arg)=>(
                                <Message key={arg.id} colormsg={arg.data.color} colorusr={props.clr} cont={arg.data.message} />
                            ))
                            }
                        </FlipMove>
                    </div>
                    <form>
                        <FormControl>
                            <div className="sbmtfld">
                                <TextField 
                                    id="outlined-basic" 
                                    className="inputpointer" 
                                    value={input} 
                                    onChange={event=>setInput(event.target.value)}  
                                    label="Message" 
                                    variant="outlined"
                                    size="small" />
                                <Button
                                    variant="contained"
                                    onClick={sendmsg}  
                                    disabled={!input} 
                                    type='submit'
                                    className="submitbtn"
                                ><Send/></Button>
                            </div>
                        </FormControl>
                    </form>
            </CardContent>

        </Card>
    )
}

export default ChatRoom
