import React from 'react';
import { Link } from 'react-router-dom';

const RecordsList = (props) => {
  return (
    <div>
      <h3>{props.user.username}</h3>
      <div className="collection">
        {props.user.records.map(record => (
          <div key={record.id} className="record">
            <Link to={`/users/${props.user.id}/records/${record.id}`}>
              <img src={record.img_url} />
              <div>
                <p><b>{record.artist}</b></p>
                <p>{record.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecordsList;