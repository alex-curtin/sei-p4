import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/record-needle.jpg';
import turntable from '../assets/turntable.png';

const Home = (props) => {
  return (
    <div className="home-page">
      <img className="hero-img" src={turntable} alt="thingy" />
      <div className="home-links">
        {props.currentUser ?
          <div>
            <p>Welcome {props.currentUser.username}!</p>
            <p><Link to={{
              pathname: `/users/${props.currentUser.id}/records`,
              state: {
                showCreateForm: true
              }
            }}
            >add a record</Link> to your collection,</p>
            <p>view <Link to={`/users/${props.currentUser.id}/records`}>your collection</Link></p>
            <p>or <Link to={`/users`}>view other people's collections</Link></p>
          </div> :
          <div>
            <p>Welcome to whatever this app for vinyl record collectors is called</p>
            <p><Link to="/users/login">Log In</Link> or <Link>Register</Link> to get started</p>
            <p>or <Link to={`/users`}>view other people's collections</Link></p>
          </div>
        }
      </div>
    </div>
  )
}

export default Home;