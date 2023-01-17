import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//  Latest Version of React is a function based component. In this we have to return the complete code of lines. like this function App() {return ( code)}. If we want to use javascript in the code we have to use{} parantheseis and need to write inside it. we have to use "className" instead of "class" and "htmlFor" to use "for"  "tabIndex" to use "tabindex" and many more things because as this are special keyword in javascript we have to use this .
// All the code written in return is known as JSX.

// #### 
//New Concept of Javascript.
// e.g. I have created a file names module1.mjs and I have stored following lines in it.
// const a ="Harry";
// const b="niru";
// const c="priya";
// const d="jay";
// Case1 export default b;
// case2 export {a}; export{c}; export{d};

// I have created another file named module2.mjs and I have writeen following code.
// import xyz from './module1.mjs'
// console.log(xyz); Ouptput- niru.
// import {a,c,d} from './module1.mjs'
// cosole.log(a) Output= Harry;
// console.log(c) Output=Priya;

// So the concept here is if we export the variable in default we can use any name to receive it in import. While if we dont use default we have to only use same variable name to receive it and have to use paranthesis to receive it.####
// ####

// Props 
// eg. We created a Navbar component we want to use the same component in other website so we can use their props concept. We will pass the desired value in navbar component like  
// This is App.js file {/<Navbar Home="New Home"/> }
// This is Navbar.js i.e. component file. export default function Navbar(props) {
  // <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>} WE can pass an object, link whatervers in this props.
  // PropTypes
  // import PropTypes from 'prop-types' Shortcut- (impt)
  // Navbar.propTypes={
    // Home:PropTypes.string} WE have decided that the Home will be take value that will be only of string type . This is proptype we can have string, number, boolean this values.
// This is function to add a voice command you provided text.
    // const speak = () => {
    //   let msg = new SpeechSynthesisUtterance();
    //   msg.text = text;
    //   window.speechSynthesis.speak(msg);
    // }
     // It is targetted by the button 'speak':
    //  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    //  <div class="container my-3">

    // States in REact
    // you can get idea about state in Textform.js file. In the following exapmle we have use useState for enable and disable dark light mode.

    // import useState from react
  //   const [mystyle,SetMyStyle]=useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  //  })

  //  const [BtnText,SetBtnText]=useState("Enable dark mode") This is syntax for useState
  //  const ChangeTheme=()=>{
  //   if(mystyle.color=='black'){
  //     SetMyStyle({ 
  //     color: 'white',
  //     backgroundColor : 'black'
  //   })
  //   SetBtnText("Enable light mode")
  //   }else{
  //     SetMyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     SetBtnText("Enable dark mode")
  //   }
  //  }