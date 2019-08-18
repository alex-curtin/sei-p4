import React from 'react';
import { Link } from 'react-router-dom';
import Turntable from './Turntable';

const Home = (props) => {
  return (
    <div className="home-page">
      <Turntable />
      <div className="home-links">
        {props.currentUser ?
          <div>
            <p>welcome {props.currentUser.username}!</p>
            <p><Link to={`/users/${props.currentUser.id}/new_record`}
            >add a record</Link> to your collection,</p>
            <p>view <Link to={`/users/${props.currentUser.id}/records`}>your collection</Link></p>
            <p>or <Link to={`/users`}>view other people's collections</Link></p>
            <p>see <Link to='/records/recent'>recently add records</Link></p>
          </div> :
          <div>
            <p>welcome to <b>record zoo</b></p>
            <p><Link to="/users/login">log in</Link> or <Link to="/users/register">register</Link> to get started</p>
            <p>or <Link to={`/users`}>view other people's collections</Link></p>
            <p>see <Link to='/records/recent'>recently add records</Link></p>
          </div>
        }
      </div>
    </div>
  )
}

export default Home;