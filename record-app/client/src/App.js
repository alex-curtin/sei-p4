import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import UsersList from './components/UsersList';
import RecordsList from './components/RecordsList';
import { createUser, fetchUsers, loginUser } from './services/api';

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
      currentUser: '',
      users: [],
    }
  }

  async componentDidMount() {
    const users = await fetchUsers();
    this.setState({
      users: users
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
    const user = await createUser(this.state.userFormData);
    debugger;
    this.setState({
      currentUser: user,
    })
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.userFormData.username,
      password: this.state.userFormData.password,
    }
    const user = await loginUser(data);
    this.setState({
      currentUser: user.user,
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
        <NavBar />
        <LoginForm
          formData={this.state.userFormData}
          handleSubmit={this.handleLogin}
          handleChange={this.handleUserFormChange}
        />
        <UserForm
          formData={this.state.userFormData}
          handleSubmit={this.handleUserSubmit}
          handleChange={this.handleUserFormChange}
        />
        <UsersList
          users={this.state.users}
        />
        <RecordsList />
      </div>
    );
  }
}

export default App;
