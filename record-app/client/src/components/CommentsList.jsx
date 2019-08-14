import React from 'react';

const CommentsList = (props) => {
  return (
    <div className="comments-list">
      {props.showComments &&
        props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CommentsList;