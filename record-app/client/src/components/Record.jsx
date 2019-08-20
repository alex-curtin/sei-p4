import React from 'react';

const Record = (props) => {
  return (
    <div className="record-details">
      <div className="box"></div>
      <div className="img-details-container">
        <img className="record-details-img" src={props.record.img_url} alt={props.record.title} />
        <div className="record-info">
          <Link className="record-details-username"
            to={`/users/${this.props.match.params.user_id}/records`}
          ><p>from {props.user.username}'s collection</p></Link>
          <h3><b>{props.record.artist}</b></h3>
          <h4>{props.record.title}</h4>
          <p><span>Record label:</span> {props.record.record_label} - {props.record.cat_num}</p>
          <p><span>Year:</span> {props.record.year}</p>
          <p><span>Country:</span> {props.record.country}</p>
          <p><span>Format:</span> {props.record.format} | {this.state.record.speed}</p>
          <p><span>Disc condition:</span> {props.record.disc_condition}</p>
          <p><span>Sleeve condition:</span> {props.record.sleeve_condition}</p>
        </div>
      </div>
      <p className="record-details-description"><em>{props.record.description}</em></p>
      <div className="record-form-buttons">
        {(this.props.currentUser && this.props.currentUser.id === parseInt(props.record.user_id)) &&
          < button onClick={props.toggleEditForm}>edit record</button>}
        {(props.currentUser && props.currentUser.id !== parseInt(props.record.user_id)) &&
          <button onClick={props.toggleCopyForm}>add this to my collection</button>}

        {this.state.comments[0] &&
          <button onClick={props.toggleComments}>{
            this.state.showComments ?
              'hide comments' :
              'show comments'}</button>}
        {this.props.currentUser &&
          <button onClick={props.toggleAddComment}>add comment</button>}
      </div>
    </div>
  )
}

export default Record;