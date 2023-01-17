import React from 'react';
import { useState } from 'react';

export default function Textform(props) {
    const HandleUpClick=()=>{
      // console.log( text);
      let newText = text.toUpperCase();
      setText(newText);
    }
    const HandleLowClick=()=>{
      // console.log("Uppercase converted"+ text);
      let newText = text.toLowerCase();
      setText(newText);
    }
    const HandleOnChange=(event)=>{
      console.log("On change");
      setText(event.target.value)
    }
    const [text,setText] = useState("");
  
    
   
  return (
    <>
    <div className="container my-4" style={{}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} type="text" style={ {backgroundColor:props.mode==='#08113e'?'grey':'white'} }rows="8" cols="6" onChange={HandleOnChange}/>
       
    <button className="btn-primary my-2 mx-2" onClick={HandleUpClick}>Change to upper case</button>
    <button className="btn-primary my-2" onClick={HandleLowClick}>Change to Lower case</button>
    </div>
   <div>
      <p>Total words are <b>{text.split(" ").length} </b> and Total Characters are <b> {text.length} </b></p>
    </div>
    </>
  )
}
