import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRecords, deleteRecord } from '../services/api';

class RecordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
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

  render() {
    return (
      <div>
        {this.props.user &&
          <div>
            <h3>{this.props.user.username}</h3>
            <Link
              to={`/users/${this.props.user.id}/new_record`}
            ><b>+</b></Link>
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