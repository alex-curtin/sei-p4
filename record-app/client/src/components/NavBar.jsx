import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <Link
        to='/'
        className="logo">APP NAME</Link>
      <div className="links">
        {props.currentUser &&
          <Link to={`/users/${props.currentUser.id}/records`}>my collection</Link>}
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