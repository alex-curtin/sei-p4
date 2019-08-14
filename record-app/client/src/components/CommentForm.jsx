import React from 'react';

const CommentForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="comment" value="comment" />
        <textarea
          name="comment"
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