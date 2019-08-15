import React from 'react';
import { Link } from 'react-router-dom';
import disc from '../assets/record-icon.png';

const UsersList = (props) => {
  return (
    <div className="users-list">
      <h2>all users</h2>
      {props.users.map(user => (
        <div key={user.id} className="users-list-item">
          <Link
            to={`/users/${user.id}/records`}><img className="record-icon" src={disc} alt="icon" />
          </Link>
          <div>
            <Link
              to={`/users/${user.id}/records`}>{user.username}</Link>
            <p className="collection-size">{user.records.length} items in collection</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersList;