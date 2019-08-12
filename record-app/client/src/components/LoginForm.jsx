import React from 'react'

const LoginForm = (props) => {
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="username"
          value={props.formData.username}
          onChange={props.handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={props.formData.password}
          onChange={props.handleChange}
          placeholder="password"
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default LoginForm;