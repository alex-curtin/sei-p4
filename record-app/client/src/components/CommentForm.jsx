import React from 'react';

const CommentForm = (props) => {
  return (
    <div className={"comment-form" + (props.isEdit ? ' edit-comment' : ' add-comment')}>
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
          <div className="comment-form-buttons">
            <button>submit</button>
            <button onClick={props.cancel}>cancel</button>
          </div>
        </form>}
    </div>
  )
}

export default CommentForm;