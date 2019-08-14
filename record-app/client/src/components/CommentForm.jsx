import React from 'react';

const CommentForm = (props) => {
  return (
    <div className="comment-form">
      {props.showForm &&
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="body" value="body" />
          <textarea
            name="body"
            cols="1"
            rows="10"
            value={props.formData.body}
            onChange={props.handleChange}
          />
          <button>submit</button>
          <button onClick={props.cancel}>cancel</button>
        </form>}
    </div>
  )
}

export default CommentForm;