import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = (props) => {
  return (
    <div className="users-list">
      <h2>Users</h2>
      {props.users.map(user => (
        <div key={user.id}>
          <Link
            to={`/users/${user.id}/records`}
          >{user.username}</Link>
          <p>{user.records.length} items in collection</p>
        </div>
      ))}
    </div>
  )
}

export default UsersList;