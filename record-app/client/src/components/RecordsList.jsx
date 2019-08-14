import React from 'react';
import { Link, Route } from 'react-router-dom';
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
    const records = await fetchRecords(this.props.user.id);
    this.setState({
      records: records,
    })
  }

  handleDelete = async (userId, id) => {
    const record = await deleteRecord(userId, id);
    this.setState(prevState => ({
      records: prevState.records.filter(rec => rec.id !== id)
    }))
  }

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



  render() {
    return (
      this.state.showCreateForm ?
        <RecordForm
          handleSubmit={this.handleCreateRecord}
          user={this.props.user}
          isEdit={false}
        /> :
        <div>
          {this.props.user &&
            <div>
              <h3>{this.props.user.username}</h3>
              <button onClick={this.toggleForm}>+</button>
              <div className="collection">
                {this.state.records.map(record => (
                  <div key={record.id} className="record">
                    <Link to={`/users/${record.user_id}/records/${record.id}`}>
                      <img src={record.img_url} />
                      <div>
                        <p><b>{record.artist}</b></p>
                        <p>{record.title}</p>
                      </div>
                    </Link>
                    <button onClick={() => (this.handleDelete(record.user_id, record.id))
                    }>X</button>
                  </div>
                ))}
              </div>
            </div>}
        </div>
    )
  }
}

export default RecordsList;