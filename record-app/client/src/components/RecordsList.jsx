import React from 'react'

const RecordsList = (props) => {
  return (
    <div>
      <h3>{props.user.username}</h3>
      <div className="collection">
        {props.user.records.map(record => (
          <div key={record.id} className="record">
            <img src={record.img_url} />
            <div>
              <p><b>{record.artist}</b></p>
              <p>{record.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecordsList;