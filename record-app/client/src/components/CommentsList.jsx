import React from 'react';

const CommentsList = (props) => {
  return (
    <div className="comments-list">
      {props.showComments &&
        props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            <p>{comment.body}</p>
            <p>by {comment.user.username}</p>
            <button onClick={() => props.handleDelete(comment.id)}>delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default CommentsList;