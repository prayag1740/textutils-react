//React function based component


import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  function toggleSwitchText(mode) {
      if (mode === 'light') {
      return 'dark'
    }
    else {
      return 'light'
    } 
  }

  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>

      <div className="btn-group mx-5">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Dark Mode color</button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><button className="dropdown-item" type="button" onClick={() => props.darkModeColor('red')}>Red</button></li>
    <li><button className="dropdown-item" type="button" onClick={() => props.darkModeColor('#964B00')}>Brown</button></li>
    <li><button className="dropdown-item" type="button" onClick={() => props.darkModeColor('blue')}>Blue</button></li>
    <li><button className="dropdown-item" type="button" onClick={() => props.darkModeColor('gray')}>Gray</button></li>
  </ul>
</div>


      <div className={`form-check form-switch text-${toggleSwitchText(props.mode)}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired} //Setting Data type for our props , if invalid value passed 
                                                 //error be raised

Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText : 'About Us'
} //setting default values for our props here