import React from 'react';
import { Link } from 'react-router-dom';
import turntable from '../assets/turntable.png';
import BurgerMenu from './BurgerMenu';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link
          to='/'
        ><img className="logo" src={turntable} alt="logo" /></Link>
        <p>record zoo</p>
      </div>
      <div className="links">
        {props.currentUser &&
          <Link to={`/users/${props.currentUser.id}/records`}>my collection</Link>}
        <Link
          to="/users"
        >browse collections</Link>
        {props.currentUser ?
          <div className="welcome">
            <p>hello {props.currentUser.username}</p>
            <button onClick={props.handleLogOut}>log out</button>
          </div> :
          <Link to="/users/login">
            <button>log in</button>
          </Link>
        }
      </div>
      {/* <BurgerMenu
        currentUser={props.currentUser}
        handleLogOut={props.handleLogOut}
      /> */}

    </div>
  )
}

export default NavBar;