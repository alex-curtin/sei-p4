import React from 'react'

const NavBar = (props) => {
  return (
    <div className="navbar">
      <p className="logo">LOGO</p>
      <div className="links">
        <p>my collection</p>
        <p>browse</p>
        {props.currentUser ?
          <button onClick={props.handleLogOut}>log out</button> :
          <button>log in</button>}
      </div>
    </div>
  )
}

export default NavBar;