import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RecordForm from './RecordForm';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import { fetchRecord, updateRecord, fetchComments, createComment, deleteComment, updateComment } from '../services/api';

class RecordDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: '',
      showEditForm: false,
      comments: [],
      showComments: false,
      showAddCommentForm: false,
      editId: null,
      commentFormData: {
        body: '',
        user_id: this.props.currentUser.id,
        record_id: this.props.match.params.id,
      }
    }
  }

  async componentDidMount() {
    const user_id = this.props.match.params.user_id;
    const id = this.props.match.params.id;
    const record = await fetchRecord(user_id, id);
    this.loadComments();
    this.setState({
      record: record,
    })
  }


  //=====================EDIT RECORD=========================//

  toggleForm = () => {
    this.setState({
      showEditForm: true,
    })
  }

  handleEditRecord = async (data) => {
    const record = await updateRecord(this.state.record.id, data);
    this.setState({
      showEditForm: false,
      record: record,
    })
  }

  cancelEditRecord = (e) => {
    e.preventDefault();
    this.setState({
      showEditForm: false,
    })
  }


  //==================SHOW COMMENTS==========================//

  loadComments = async () => {
    const user_id = this.props.match.params.user_id;
    const id = this.props.match.params.id;
    const comments = await fetchComments(user_id, id);
    this.setState({
      comments: comments,
    })
  }

  toggleComments = () => {
    this.setState({
      showComments: true,
    })
  }


  //========================ADD COMMENT========================//

  handleChangeComment = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      commentFormData: {
        ...prevState.commentFormData,
        [name]: value
      }
    }))
  }

  toggleAddComment = () => {
    this.setState({
      showAddCommentForm: true,
      editId: null,
    })
    this.resetCommentForm();
  }

  handleSubmitComment = async (e) => {
    e.preventDefault();
    const userId = this.props.match.params.user_id;
    const data = this.state.commentFormData;
    const comment = await createComment(userId, data);
    this.setState(prevState => ({
      comments: [...prevState.comments, comment],
      showComments: true,
      showAddCommentForm: false,
    }))
    this.resetCommentForm();
  }

  cancelAddComment = (e) => {
    e.preventDefault();
    this.setState({
      showAddCommentForm: false,
    })
    this.resetCommentForm();
  }


  //=====================EDIT COMMENT========================//

  editComment = (comment) => {
    this.setState({
      showAddCommentForm: false,
      editId: comment.id,
      commentFormData: {
        body: comment.body,
        user_id: this.props.currentUser.id,
        record_id: this.props.match.params.id,
      }
    })
  }

  handleUpdateComment = async (e) => {
    e.preventDefault();
    const userId = this.props.match.params.user_id;
    const id = this.state.editId;
    const data = this.state.commentFormData;
    const comment = await updateComment(userId, id, data);
    this.setState(prevState => ({
      comments: [...prevState.comments.filter(com => com.id !== id), comment],
      editId: null,
    }))
    this.resetCommentForm();
  }

  cancelEditComment = (e) => {
    e.preventDefault();
    this.setState({
      editId: null
    })
    this.resetCommentForm();
  }


  //=====================DELETE COMMENT=========================//

  handleDeleteComment = async (id) => {
    const userId = this.props.match.params.user_id;
    const recordId = this.props.match.params.id;
    const comment = await deleteComment(userId, recordId, id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(com =>
        com.id !== id)
    }))
  }


  //====================HELPER FUNCTION======================//

  resetCommentForm = () => {
    this.setState({
      commentFormData: {
        body: '',
        user_id: this.props.currentUser.id,
        record_id: this.props.match.params.id,
      }
    })
  }

  render() {
    return (
      this.state.showEditForm ?
        <RecordForm
          handleSubmit={this.handleEditRecord}
          user={this.props.user}
          record={this.state.record}
          isEdit={true}
          cancel={this.cancelEditRecord}
        /> :
        this.state.record &&
        <div>
          <div className='record-detail'>
            <div className="img-details-container">
              <img src={this.state.record.img_url} />
              <div className="record-info">
                <Link
                  to={`/users/${this.props.match.params.user_id}/records`}
                >from {this.props.user.username}'s collection</Link>
                <h3><b>{this.state.record.artist}</b></h3>
                <h4>{this.state.record.title}</h4>
                <p><span>Record label:</span> {this.state.record.record_label} - {this.state.record.cat_num}</p>
                <p><span>Year:</span> {this.state.record.year}</p>
                <p><span>Country:</span> {this.state.record.country}</p>
                <p><span>Format:</span> {this.state.record.format} | {this.state.record.speed}</p>
                <p><span>Disc condition:</span> {this.state.record.disc_condition}</p>
                <p><span>Sleeve condition:</span> {this.state.record.sleeve_condition}</p>
              </div>
            </div>
            <p><em>{this.state.record.description}</em></p>
            <div className="record-form-buttons">
              {(this.props.currentUser.id === parseInt(this.props.match.params.user_id)) &&
                < button onClick={this.toggleForm}>edit record</button>}
              <button onClick={this.toggleComments}>show comments</button>
              {this.props.currentUser &&
                <button onClick={this.toggleAddComment}>add comment</button>}
            </div>
          </div>
          <CommentForm
            handleChange={this.handleChangeComment}
            handleSubmit={this.handleSubmitComment}
            formData={this.state.commentFormData}
            showForm={this.state.showAddCommentForm}
            cancel={this.cancelAddComment}
          />
          <CommentsList
            showComments={this.state.showComments}
            comments={this.state.comments}
            formData={this.state.commentFormData}
            handleChange={this.handleChangeComment}
            handleSubmit={this.handleUpdateComment}
            handleDelete={this.handleDeleteComment}
            editComment={this.editComment}
            editId={this.state.editId}
            cancel={this.cancelEditComment}
            currentUser={this.props.currentUser}
          />
        </div >
    )
  }
}

export default withRouter(RecordDetail);
