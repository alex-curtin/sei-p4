import React from 'react'

class RecordDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const record = this.props.user.records.find(el =>
      el.id === parseInt(this.props.match.params.id));
    return (
      record ?
        <div className='record-detail'>
          <img src={record.img_url} />
          <div>
            <p><b>{record.artist}</b></p>
            <p>{record.title}</p>
            <p>{record.record_label} - {record.cat_num}</p>
            <p>{record.year}</p>
            <p>{record.country}</p>
            <p>{record.format} | {record.speed}</p>
            <p>disc condition: {record.disc_condition}</p>
            <p>sleeve condition: {record.sleeve_condition}</p>
          </div>
          <p><em>{record.description}</em></p>
        </div> :
        <div>q</div>
    )
  }
}

export default RecordDetail;
