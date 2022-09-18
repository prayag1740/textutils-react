import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//Navbar component is being imported from Navbar.js
//props are being passed to components to render dynamic flow
// container my-3 -- boostrap class for margins and containers

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" /> 
    <div className="container my-5">
    <TextForm heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
