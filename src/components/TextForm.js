import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("converted to uppercase !", "success")

  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("converted to lowercase !", "success")

  }

  const handleRemoveSpecialCharcters = () => {
    let newText = text.replace(/[^a-zA-Z ]/g, "");
    setText(newText);
    props.alert("all special characters removed !", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value) ;
  }

  const countWords = (text) => {
    if (text.length === 0) {
      return 0 ;
    }
    let newText = text.replace(/\s+/g,' ').trim();
    return newText.split(" ").length ;

  }

  const countCharacters = (text) => {
    let newText = text.replace(/\s+/g,' ').trim();
    return newText.length ;

  }
 
  const [text, setText] = useState(''); //for setting state variable
  //text is the current value being used ; curr it is Enter Text here
  //setText is a fucntion used to update text value

  //2 curly braces in return func 
  //1st -- for referring javascript and 2nd is for object

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}> Convert to Upper case</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLowerClick}> Convert to Lower case</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleRemoveSpecialCharcters}> Remove Special Characters</button>
       
    </div>
    <div className='container my-5' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      <h3> Your Text Summary</h3>
      <p>{countWords(text)} words and {countCharacters(text)} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
}
