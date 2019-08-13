import React from 'react'

class RecordDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const record = this.props.user.records.find(record =>
      record.id === parseInt(this.props.match.params.id));
    return (
      <div className='record-detail'>
        <img src={record.img_url} />
        <div className="record-info">
          <h3><b>{record.artist}</b></h3>
          <h4>{record.title}</h4>
          <p><span>Record label:</span> {record.record_label} - {record.cat_num}</p>
          <p><span>Year:</span> {record.year}</p>
          <p><span>Country:</span> {record.country}</p>
          <p><span>Format:</span> {record.format} | {record.speed}</p>
          <p><span>Disc condition:</span> {record.disc_condition}</p>
          <p><span>Sleeve condition:</span> {record.sleeve_condition}</p>
        </div>
        <p><em>{record.description}</em></p>
      </div>
    )
  }
}

export default RecordDetail;
