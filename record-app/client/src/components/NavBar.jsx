import React from 'react'

const NavBar = (props) => {
  return (
    <div className="navbar">
      <p className="logo">APP</p>
      <div className="links">
        <p>my collection</p>
        <p>browse</p>
        <p>login</p>
      </div>
    </div>
  )
}

export default NavBar;