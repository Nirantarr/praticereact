import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, SetMode] = useState('white');
  const [BtnText, SetBtnText] = useState("Enable Dark mode")
  // const [alert, setalert] = useState(null);
  // const Showalert = (message, type) => {
  //   setalert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setalert(null);
  //   }, 1500);
  // }
  const ChangeScreenMode = () => {
    if (mode === 'white') {
      SetMode('#08113e')
      document.body.style.backgroundColor = '#08113e';
      SetBtnText("Enable Light mode");
      // Showalert("Dark mode has been enabled", "success");

    } else {
      SetMode('white')
      document.body.style.backgroundColor = 'white';
      SetBtnText("Enable Dark mode");
      // Showalert("light mode has been enabled", "success");

    }
  }

  return (
    <>
      <Router>
        <Navbar Home="Operations" mode={mode} ChangeScreenMode={ChangeScreenMode} BtnText={BtnText}/>
        {/* <Alert alert={alert} /> */}
        <div className="container">
          <Switch>
            <Route exact path="/"><Textform key="a"heading="Enter your text here" mode={mode} /></Route>
            <Route exact path="/about"><Aboutus key="b"/></Route>
            </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;

