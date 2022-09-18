import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);

  }

  const handleOnChange = (event) => {
    setText(event.target.value) ;
  }

  const [text, setText] = useState('Enter text here'); //for setting state variable
  //text is the current value being used ; curr it is Enter Text here
  //setText is a fucntion used to update text value

  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}> Convert to Upper case</button>
    </div>
  )
}
