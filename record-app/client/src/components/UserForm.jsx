import React from 'react'

const UserForm = (props) => {
  return (
    <div className="user-form">
      <h2>register</h2>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="username"
          value={props.formData.username}
          onChange={props.handleChange}
          placeholder="username"
        />
        <input
          type="text"
          name="email"
          value={props.formData.email}
          onChange={props.handleChange}
          placeholder="email"
        />
        <input
          type="text"
          name="location"
          value={props.formData.location}
          onChange={props.handleChange}
          placeholder="location"
        />
        <input
          type="password"
          name="password"
          value={props.formData.password}
          onChange={props.handleChange}
          placeholder="password"
        />
        {props.errors &&
          <div className="errors">{props.errors.map(e =>
            <p key={e}>{e}</p>
          )}</div>
        }
        <button>submit</button>
      </form>
    </div>
  )
}

export default UserForm;