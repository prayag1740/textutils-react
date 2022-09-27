export default function About(props) {

    //enabling dark mode

    // const [myStyle, setMyStyle] = useState({ //Using myStyle as a state variable and setMyStyle wull update colors
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    }
    



  return (
    <div className='container' style={myStyle}>
        <h2>About Us</h2> 
    <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils give you a way to analyze your text quickly and efficiently. Be it word count, characters count or uppercase conversion.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils is a free character counter tool that provides instant character count and word count stastistics 
       for a given text. It also reports the number of words in a given text and time required to read text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This word counter works in any web browser such as Chrome, Firefox, Safari, Internet Explorer etc. It suits to
       count characters in Facebook, Twitter, blogs, books.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
