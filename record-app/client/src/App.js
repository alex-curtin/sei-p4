import React from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import UsersList from './components/UsersList';
import RecordsList from './components/RecordsList';
import RecordDetail from './components/RecordDetail';
import RecordForm from './components/RecordForm';
import BurgerMenu from './components/BurgerMenu';

import {
  registerUser, fetchUsers,
  loginUser, verifyToken,
  fetchRecords, createRecord,
  deleteRecord,
  fetchRecentRecords,
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
      registerErrors: [],
      loginError: false,
      currentUser: null,
      users: [],
      records: [],
      showBurger: false,
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

  //==============LOGIN/REGISTER==================//
  handleUserFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userFormData: {
        ...prevState.userFormData,
        [name]: value,
      }
    }))
  }

  //=================REGISTER====================//
  handleUserSubmit = async (e) => {
    e.preventDefault();
    const user = await registerUser(this.state.userFormData);
    if (user.isAxiosError) {
      this.handleRegisterErrors(user.response.data);
    } else {
      this.setState(prevState => ({
        currentUser: user,
        users: [...prevState.users, user],
        registerErrors: []
      }))
      this.resetUserFormData();
      this.props.history.push('/');
    }
  }

  handleRegisterErrors = (e) => {
    this.setState({
      registerErrors: [...e],
    })
  }

  //==================LOGIN======================//
  handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.userFormData.username,
      password: this.state.userFormData.password,
    }
    const user = await loginUser(data);
    if (user.isAxiosError) {
      this.handleLoginErrors();
    } else {
      this.setState({
        currentUser: user,
        loginError: false,
      })
      this.resetUserFormData();
      this.props.history.push('/');
    }
  }

  handleLoginErrors = () => {
    this.setState({
      loginError: true,
    })
  }

  //=====================LOGOUT======================//
  handleLogOut = () => {
    localStorage.removeItem('jwt');
    this.setState({
      currentUser: null,
      showBurger: false,
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

  //================ SHOW RECORDS ===================//
  loadRecords = async (data) => {
    const records = await fetchRecords(data);
    this.setState({
      records: records,
    })
  }

  loadRecentRecords = async (data) => {
    const records = await fetchRecentRecords();
    this.setState({
      records: records,
    })
  }

  clearRecords = () => {
    this.setState({
      records: [],
    })
  }

  //=============== CREATE RECORD ==================//
  handleCreateRecord = async (data) => {
    const record = await createRecord(data);
    this.setState(prevState => ({
      records: [...prevState.records, record],
      showCreateForm: false,
    }))
    this.props.history.push(`/users/${this.state.currentUser.id}/records/${record.id}`)
  }

  //================= DELETE RECORD ===============//
  handleDeleteRecord = async (userId, id) => {
    const record = await deleteRecord(userId, id);
    this.setState(prevState => ({
      records: prevState.records.filter(rec => rec.id !== id)
    }))
  }

  //=============BURGER MENU====================//
  toggleBurger = () => {
    this.setState(prevState => ({
      showBurger: !prevState.showBurger,
    }))
  }

  render() {
    return (
      <div className="App">
        <NavBar
          handleLogOut={this.handleLogOut}
          currentUser={this.state.currentUser}
          showBurger={this.state.showBurger}
          toggleBurger={this.toggleBurger}
        />
        <Route
          exact path="/"
          render={() => <Home
            currentUser={this.state.currentUser}
          />}
        />
        <Route
          exact path='/users/login'
          render={() => (<LoginForm
            formData={this.state.userFormData}
            handleSubmit={this.handleLogin}
            handleChange={this.handleUserFormChange}
            loginError={this.state.loginError}
          />)}
        />
        <Route
          exact path='/users/register'
          render={() => (<UserForm
            formData={this.state.userFormData}
            handleSubmit={this.handleUserSubmit}
            handleChange={this.handleUserFormChange}
            errors={this.state.registerErrors}
          />)}
        />
        <Route
          exact path='/users'
          render={() => (
            <UsersList
              users={this.state.users}
              currentUser={this.state.currentUser}
            />)}
        />
        <Route
          exact path='/users/:id/records'
          render={(props) => (
            <RecordsList
              {...props}
              user={this.state.users.find(user =>
                user.id === parseInt(props.match.params.id))}
              currentUser={this.state.currentUser}
              records={this.state.records}
              loadRecords={this.loadRecords}
              handleDelete={this.handleDeleteRecord}
              showRecent={false}
              clearRecords={this.clearRecords}
            />
          )}
        />
        <Route
          exact path='/records/recent'
          render={(props) => (
            <RecordsList
              {...props}
              users={this.state.users}
              currentUser={this.state.currentUser}
              records={this.state.records}
              loadRecords={this.loadRecentRecords}
              handleDelete={this.handleDeleteRecord}
              showRecent={true}
              user={this.state.currentUser}
              clearRecords={this.clearRecords}
            />
          )}
        />
        <Route
          exact path='/users/:id/new_record/'
          render={(props) => (
            <RecordForm
              {...props}
              user={this.state.currentUser}
              isEdit={false}
              handleSubmit={this.handleCreateRecord}
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
              records={this.state.records}
            />)}
        />

      </div>
    );
  }
}

export default withRouter(App);
