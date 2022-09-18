import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);

  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

  }

  const handleOnChange = (event) => {
    setText(event.target.value) ;
  }

  const [text, setText] = useState(''); //for setting state variable
  //text is the current value being used ; curr it is Enter Text here
  //setText is a fucntion used to update text value

  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to Upper case</button>
        <button className='btn btn-primary mx-2' onClick={handleLowerClick}> Convert to Lower case</button>
    </div>
    <div className='container my-5'>
      <h3>Preview</h3>
      <p>{text}</p>
      <h3> Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
}
