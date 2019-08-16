import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <div className="login-page">
      <h2>log in</h2>
      <form
        className="login-form"
        onSubmit={props.handleSubmit}>
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
        <button>log in</button>
      </form>
      {props.loginError &&
        <p className="errors">incorrect username or password</p>
      }
      <p>or <Link to='/users/register'>register</Link></p>
    </div>
  )
}

export default LoginForm;