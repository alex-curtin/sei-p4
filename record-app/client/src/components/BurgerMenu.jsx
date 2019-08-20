import React from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = (props) => {
  return (
    <div className="burger-menu">
      <button
        onClick={props.toggleBurger}
        className={"burger-button" + (props.showBurger ? ' open' : ' closed')}>
        <div className="burger-bar-1"></div>
        <div className="burger-bar-2"></div>
        <div className="burger-bar-3"></div>
      </button>
      {props.showBurger &&
        <div className="burger-nav">
          {props.currentUser ?
            <div className="burger-links">
              <p>hello {props.currentUser.username}</p>
              <Link onClick={props.toggleBurger} to={`/users/${props.currentUser.id}/records`}>my collection</Link>
              <Link onClick={props.toggleBurger} to="/users">browse collections</Link>
              <button onClick={props.handleLogOut}>log out</button>
            </div> :
            <div className="burger-links">
              <Link onClick={props.toggleBurger} to="/users/login">log in</Link>
              <Link onClick={props.toggleBurger} to="/users/register">register</Link>
              <Link onClick={props.toggleBurger} to="/users">browse collections</Link>
            </div>
          }
        </div>}
    </div>
  )
}

export default BurgerMenu;
