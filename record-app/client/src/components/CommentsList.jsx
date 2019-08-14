import React from 'react';

const CommentsList = (props) => {
  return (
    <div>
      {props.showComments &&
        props.comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CommentsList;