import React, {useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './conn';

function App() {
  const[input, setInput]=useState('');
  const[msg, setmsg]=useState([]);
  const[clr,setclr]=useState('');
  console.log(msg);
  
  useEffect(() => {
    setclr(prompt("enter your color"))
    
  }, [])
  
  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot=>{
      setmsg(snapshot.docs.map(doc => doc.data()))
    })
  }, [])


  const sendmsg = (event)=>{
    event.preventDefault();
    setmsg([...msg, {message:input, color:clr}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">msg</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)} aria-describedby="my-helper-text" />
          <Button disabled={!input} type='submit' onClick={sendmsg}>send</Button>
        </FormControl>
      </form>


        {
          msg.map(arg=>(
            <Message colormsg={arg.color} cont={arg.message} />
          ))
        }
      
      
    </div>
  );
}
export default App;