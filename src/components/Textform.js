import React from 'react';
import { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("");
  const HandleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const HandleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const HandleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }
  return (
    <>
      <div className="container my-4" style={{}}>
        <h1 style={{ color: props.mode === 'white' ? 'black' : 'white' }}>{props.heading}</h1>
        <textarea className="form-control" value={text} type="text" style={{ backgroundColor: props.mode === '#08113e' ? 'grey' : 'white' }} rows="8" cols="6" onChange={HandleOnChange} />

        <button className="btn-primary my-2 mx-2 rounded-pill " onClick={HandleUpClick}>Change to upper case</button>
        <button className="btn-primary my-2 rounded-pill" onClick={HandleLowClick}>Change to Lower case</button>
      </div>
      <div>
        <p style={{ color: props.mode === '#08113e' ? 'white' : 'black' }}>Total words are <b>{text.split(" ").filter((element) => { return element.length !== 0 }).length} </b> and Total Characters are <b> {text.length} </b></p>
      </div>
    </>
  )
}
