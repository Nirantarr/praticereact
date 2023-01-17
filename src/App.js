// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import Textform from './components/Textform';
// import Aboutus from './components/Aboutus';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, SetMode] = useState('white');
  const [alert, setalert] = useState(null);
  const Showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const ChangeScreenMode = () => {
    if (mode === 'white') {
      SetMode('#08113e')
      document.body.style.backgroundColor = '#08113e';
      Showalert("Dark mode has been enabled","success");

    } else {
      SetMode('white')
      document.body.style.backgroundColor = 'white';
      Showalert("light mode has been enabled","success");

    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar Home="TextUtils" mode={mode} ChangeScreenMode={ChangeScreenMode} />
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch>
          <Route exact path="/about">
            <Aboutus/>
          </Route>
         
          <Route exact path="/"> */}
          <Textform heading="Enter your text here" />
          {/* </Route> */}
        {/* </Switch> */}
       
      </div>
      {/* </Router> */}
      {/* <div class="aboutus"><Aboutus/></div> */}
    </>
  );
}

export default App;
