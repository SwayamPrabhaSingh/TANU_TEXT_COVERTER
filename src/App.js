import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// }from "react-router-dom";
  


function App() {
  const[mode, setMode]= useState('light');  //Whether dark mode is enable or not?
  const[alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#261373';
      showAlert(" Dark mode has been enabled.","success ");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled.","success ");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-5">
    {/* <Routes>
          <Route exact path="/about" element={<About />} /> 
    <Route exact path="/" element={ */} <TextForm showAlert={showAlert} heading = "Enter the text to Analyze below :" mode={mode}/>
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
// remove this for change the work of app---  <About/> 