import React from 'react'

const NavBar = (props) => {
  return (
    <div className="navbar">
      <p className="logo">APP</p>
      <div className="links">
        <p>my collection</p>
        <p>browse</p>
        <p>log in</p>
        <button onClick={props.handleLogOut}>log out</button>
      </div>
    </div>
  )
}

export default NavBar;