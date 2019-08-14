import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchRecord } from '../services/api';

class RecordDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: '',
    }
  }

  async componentDidMount() {
    const record = await fetchRecord(this.props.user.id, this.props.match.params.id)
    this.setState({
      record: record,
    })
  }

  render() {
    return (
      this.state.record &&
      <div className='record-detail'>
        <img src={this.state.record.img_url} />
        <div className="record-info">
          <h3><b>{this.state.record.artist}</b></h3>
          <h4>{this.state.record.title}</h4>
          <p><span>Record label:</span> {this.state.record.record_label} - {this.state.record.cat_num}</p>
          <p><span>Year:</span> {this.state.record.year}</p>
          <p><span>Country:</span> {this.state.record.country}</p>
          <p><span>Format:</span> {this.state.record.format} | {this.state.record.speed}</p>
          <p><span>Disc condition:</span> {this.state.record.disc_condition}</p>
          <p><span>Sleeve condition:</span> {this.state.record.sleeve_condition}</p>
        </div>
        <p><em>{this.state.record.description}</em></p>
        <Link to={`/users/${this.state.record.user_id}/records/${this.state.record.id}/edit`}> edit record</Link>
      </div>
    )
  }
}

export default withRouter(RecordDetail);
