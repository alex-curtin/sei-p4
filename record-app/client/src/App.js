import React from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import UsersList from './components/UsersList';
import RecordsList from './components/RecordsList';
import RecordDetail from './components/RecordDetail';

import {
  registerUser, fetchUsers,
  loginUser, verifyToken,
} from './services/api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFormData: {
        username: '',
        email: '',
        location: '',
        password: '',
      },
      currentUser: null,
      users: [],
    }
  }

  async componentDidMount() {
    const user = await verifyToken();
    const users = await fetchUsers();
    this.setState({
      users: users,
      currentUser: user,
    })
  }

  handleUserFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userFormData: {
        ...prevState.userFormData,
        [name]: value,
      }
    }))
  }

  handleUserSubmit = async (e) => {
    e.preventDefault();
    const user = await registerUser(this.state.userFormData);
    this.setState({
      currentUser: user,
    })
    this.resetUserFormData();
    this.props.history.push('/');
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.userFormData.username,
      password: this.state.userFormData.password,
    }
    const user = await loginUser(data);
    this.setState({
      currentUser: user,
    })
    this.resetUserFormData();
    this.props.history.push('/')
  }

  handleLogOut = () => {
    localStorage.removeItem('jwt');
    this.setState({
      currentUser: null,
    })
  }

  resetUserFormData = () => {
    this.setState({
      userFormData: {
        username: '',
        email: '',
        location: '',
        password: '',
      },
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar
          handleLogOut={this.handleLogOut}
          currentUser={this.state.currentUser}
        />
        <Route
          exact path='/users/login'
          render={() => (<LoginForm
            formData={this.state.userFormData}
            handleSubmit={this.handleLogin}
            handleChange={this.handleUserFormChange}
          />)}
        />
        <Route
          exact path='/users/register'
          render={() => (<UserForm
            formData={this.state.userFormData}
            handleSubmit={this.handleUserSubmit}
            handleChange={this.handleUserFormChange}
          />)}
        />
        <Route
          exact path='/users/update'
          render={() => (<UserForm
            formData={this.state.userFormData}
            handleSubmit={this.handleUserUpdate}
            handleChange={this.handleUserFormChange}
            user={this.state.currentUser}
          />)}
        />
        <Route
          exact path='/users'
          render={() => (
            <UsersList
              users={this.state.users}
            />)}
        />
        <Route
          exact path='/users/:id/records'
          render={(props) => (
            <RecordsList
              {...props}
              user={this.state.users.find(user =>
                user.id === parseInt(props.match.params.id))}
              records={this.state.records}
              currentUser={this.state.currentUser}
            />
          )}
        />
        <Route
          exact path='/users/:user_id/records/:id'
          render={(props) => (
            <RecordDetail
              {...props}
              user={this.state.users.find(user =>
                user.id === parseInt(props.match.params.user_id))}
              currentUser={this.state.currentUser}
            />)}
        />
      </div>
    );
  }
}

export default withRouter(App);
