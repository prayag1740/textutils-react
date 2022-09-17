import './App.css';
import Navbar from './components/Navbar';

//Navbar component is being imported from Navbar.js
//props are being passed to components to render dynamic flow

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" /> 
    </>
  );
}

export default App;
