import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RecordForm from './RecordForm';
import {
  fetchRecords, deleteRecord,
  createRecord, updateRecord
} from '../services/api';

class RecordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      showCreateForm: false,
    }
  }

  async componentDidMount() {
    const records = await fetchRecords(this.props.match.params.id);
    this.setState({
      records: records,
    })
    this.props.location.state &&
      this.setState({
        showCreateForm: this.props.location.state.showCreateForm,
      })
  }

  async componentDidUpdate() {

  }

  //===============DELETE RECORD================//
  handleDelete = async (userId, id) => {
    const record = await deleteRecord(userId, id);
    this.setState(prevState => ({
      records: prevState.records.filter(rec => rec.id !== id)
    }))
  }


  //====================CREATE RECORD=============//
  toggleForm = () => {
    this.setState({
      showCreateForm: true,
    })
  }

  handleCreateRecord = async (data) => {
    const record = await createRecord(data);
    this.setState(prevState => ({
      records: [...prevState.records, record],
      showCreateForm: false,
    }))
  }

  cancelCreateRecord = (e) => {
    e.preventDefault();
    this.setState({
      showCreateForm: false,
    })
  }

  render() {
    return (
      this.state.showCreateForm ?
        <RecordForm
          handleSubmit={this.handleCreateRecord}
          user={this.props.user}
          isEdit={false}
          cancel={this.cancelCreateRecord}
        /> :
        <div>
          {(this.props.user) &&
            <div>
              <h3>{this.props.user.username}'s Collection</h3>
              {(this.props.currentUser && this.props.currentUser.id === parseInt(this.props.match.params.id)) &&
                <button onClick={this.toggleForm}>add a record</button>}
              <div className="collection">
                {this.state.records.map(record => (
                  <div key={record.id} className="record">
                    <Link to={`/users/${record.user_id}/records/${record.id}`}>
                      <img src={record.img_url} />
                      <div>
                        <p className="list-artist">{record.artist}</p>
                        <p className="list-title">{record.title}</p>
                      </div>
                    </Link>
                    {(this.props.currentUser && this.props.currentUser.id === parseInt(this.props.match.params.id)) &&
                      <button onClick={() => (this.handleDelete(record.user_id, record.id))
                      }>remove from collection</button>}
                  </div>
                ))}
              </div>
            </div>}
        </div>
    )
  }
}

export default withRouter(RecordsList);