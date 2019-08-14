import React from 'react';
import CommentForm from './CommentForm';

const CommentsList = (props) => {
  return (
    <div className="comments-list">
      {props.showComments &&
        props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            {props.editId === comment.id ?
              <CommentForm
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
                formData={props.formData}
                showForm={true}
                cancel={props.cancel}
              /> :
              <div>
                <p>{comment.body}</p>
                <p>by {comment.user.username}</p>
                <button onClick={() => props.editComment(comment)}>edit</button>
                <button onClick={() => props.handleDelete(comment.id)}>delete</button>
              </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default CommentsList;