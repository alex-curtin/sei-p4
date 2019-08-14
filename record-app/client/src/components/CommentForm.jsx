import React from 'react';

const CommentForm = (props) => {
  return (
    <div className="comment-form">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="body" value="body" />
        <textarea
          name="body"
          cols="1"
          rows="10"
          value={props.formData.body}
          onChange={props.handleChange}
        />
        <button>post</button>
      </form>
    </div>
  )
}

export default CommentForm;