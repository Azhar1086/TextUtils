import Navbar from './components/navbar';
import './App.css';
import React, { useState } from 'react';
import Textarea from './components/textarea';
import Alert from './components/alert';
// import About from './components/about';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,  
// } from "react-router-dom";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "primary");
    }
  };

  const signin = () => {
    if (!isSignedIn) {
      setIsSignedIn(true);
      showAlert("You're signed in!", "success");
    } else {
      showAlert("You're already signed in!", "warning");
    }
  };

  const signout = () => {
    if (isSignedIn) {
      setIsSignedIn(false);
      showAlert("You've signed out!", "success");
    } else {
      showAlert("You're not signed in!", "warning");
    }
  };

  return (
    // <Router>
      <>
      <Navbar title="sillyfellows" mode={mode} setMode={setMode} togglemode={togglemode} alert={alert} />
      <Alert alert={alert} />
      <div className="button-group">
        <button onClick={signin} className='btn btn-primary m-2'>Sign In</button>
        <button onClick={signout} className='btn btn-primary m-2'>Sign Out</button>
      </div>
      <div className="container my-3">
        <div>
        <Textarea showAlert={showAlert} heading="Enter a text area to analyze" mode={mode} />
          {/* <Routes>  
            <Route path="/about" element={<About />} /> 
            <Route path="/" element={<Textarea showAlert={showAlert} heading="Enter a text area to analyze" mode={mode} />} /> 
          </Routes> */}
        </div>
        <p style={{ color: mode === "dark" ? "white" : "black" }}>
          {isSignedIn ? "You are signed in." : "You are signed out."}
        </p>
      </div>
    </>
    // </Router>
  );
}

export default App;
