import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//Navbar component is being imported from Navbar.js
//props are being passed to components to render dynamic flow
// container my-3 -- boostrap class for margins and containers

function App() {

  const [mode, setMode] = useState('light') ; //initially setting dark mode as false
  const [alert, setAlert] = useState(null) ;
  const [currdark, setDarkModeColor] = useState('grey');
  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 500) ; //alert remains only for 1.5 secs

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = currdark;
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  const selectDarkModeDropDown = (colorCode) => {
    setDarkModeColor(colorCode) ;
    let showColor ;
    if (colorCode === '#964B00') {
      showColor = 'brown' ;
    } 
    else {
      showColor = colorCode;
    }
    showAlert(`Dark mode changes to ${showColor}`, 'success');
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} darkModeColor={selectDarkModeDropDown} /> 
    <Alert alert={alert} />
    <div className="container my-5">
    <TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
