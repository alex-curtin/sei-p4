import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <p className="logo">LOGO</p>
      <div className="links">
        <p>my collection</p>
        <Link
          to="/users"
        >browse</Link>
        {props.currentUser ?
          <div className="welcome">
            <p>Hello {props.currentUser.username}</p>
            <button onClick={props.handleLogOut}>log out</button>
          </div> :
          <Link to="/users/login">
            <button>log in</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default NavBar;