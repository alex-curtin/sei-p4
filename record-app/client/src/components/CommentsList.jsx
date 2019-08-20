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
                isEdit={true}
              /> :
              <div>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-username">by {comment.user.username}</p>
                {(props.currentUser && props.currentUser.id === comment.user_id) &&
                  <div className="comment-buttons">
                    <button onClick={() => props.editComment(comment)}>edit</button>
                    <button onClick={() => props.handleDelete(comment.id)}>delete</button>
                  </div>}
              </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default CommentsList;