import React from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = (props) => {
  return (
    <div className="burger-menu">
      <div className="burger-button">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="burger-nav">
        {props.currentUser ?
          <div className="burger-links">
            <p>hello {props.currentUser.username}</p>
            <Link to={`/users/${props.currentUser.id}/records`}>my collection</Link>
            <Link to="/users">browse collections</Link>
            <button onClick={props.handleLogOut}>log out</button>
          </div> :
          <div>

          </div>
        }
      </div>
    </div>
  )
}

export default BurgerMenu;
