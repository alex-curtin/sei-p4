import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="home-page">
      <img className="hero-img" src='https://media.giphy.com/media/KwwRlMDSTdbIA/giphy.gif' alt="thingy" />
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
            <p>welcome to <b>record zoo</b></p>
            <p><Link to="/users/login">log in</Link> or <Link to="/users/register">register</Link> to get started</p>
            <p>or <Link to={`/users`}>view other people's collections</Link></p>
          </div>
        }
      </div>
    </div>
  )
}

export default Home;