import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';

class RecordsList extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.showRecent ?
      this.props.loadRecords() :
      this.props.loadRecords(this.props.match.params.id);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.user && prevProps.user) {
      if (this.props.user.id != prevProps.user.id) {
        this.props.loadRecords(this.props.match.params.id);
      }
    }
  }

  componentWillUnmount() {
    this.props.clearRecords();
  }

  addDefaultImg = (e) => {
    e.target.src = placeholder;
  }

  render() {
    return (
      <div>
        {(this.props.records && (this.props.user || this.props.showRecent)) &&
          <div className="collection-page">
            <div className="collection-top">

              {this.props.showRecent ?
                <p className="collection-title">recently added records</p> :
                (this.props.currentUser &&
                  this.props.currentUser.id === parseInt(this.props.match.params.id)) ?
                  <p className="collection-title">your collection</p> :
                  <p className="collection-title">{this.props.user.username}</p>}

              {(this.props.currentUser &&
                this.props.currentUser.id === parseInt(this.props.match.params.id)) &&
                <Link to={`/users/${this.props.currentUser.id}/new_record`}>
                  <button>add a record</button></Link>}

            </div>
            <div className="collection">
              {this.props.records.map(record => (
                <div key={record.id} className="record">
                  <Link to={`/users/${record.user_id}/records/${record.id}`}>
                    <div className="record-img-container">
                      <img onError={this.addDefaultImg} src={record.img_url} alt={record.title} />
                      <div className="record-disc"></div>
                    </div>
                  </Link>
                  <div className="record-artist-title">
                    <p className="list-artist">{record.artist}</p>
                    <p className="list-title">{record.title}</p>
                    {this.props.showRecent &&
                      <p>added by <Link to={`/users/${record.user_id}/records`}>{record.user.username}</Link></p>}
                  </div>
                  {(this.props.currentUser && this.props.currentUser.id === parseInt(this.props.match.params.id)) &&
                    <button onClick={() => (this.props.handleDelete(record.user_id, record.id))
                    }>delete</button>}
                </div>
              ))}
            </div>
          </div>}
      </div>
    )
  }
}

export default withRouter(RecordsList);