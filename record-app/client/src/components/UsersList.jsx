import React from 'react'

const UsersList = (props) => {
  return (
    <div>
      <h2>Users</h2>
      {props.users.map(user => (
        <p key={user.id}>{user.username}</p>
      ))}
    </div>
  )
}

export default UsersList;