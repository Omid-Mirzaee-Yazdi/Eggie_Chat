import React, {useState, useEffect} from 'react';
import './App.css';
import Pointer from './pointer';
import Color from './color';
import ChatRoom from './ChatRoom';


function App() {
  //states

  const[clr,setclr]=useState('');
  const[pointer,setpointer]=useState('');
  //methods


  let currdialog=null;

  if(pointer==="" && clr===""){
    currdialog=(
      <Pointer setstate={(pointerchosen)=>setpointer(pointerchosen)}/>
    );
  }
  
  else if(pointer!=="" && clr===""){
    currdialog=(
      <Color pointer={pointer} setstate={(colorchosen)=>setclr(colorchosen)}/>
    );
  }
  
  else if(pointer!=="" && clr!==""){
    currdialog=(
      <ChatRoom pointer={pointer} clr={clr}/>
    );
  }
  
  else{
    currdialog=(
      <div>
        <h1>security issue detected</h1>
        <h3>please close the window</h3>
      </div>
    )
  }


  return (
    <div className="App">
        {currdialog}
    </div>
  );
}
export default App;