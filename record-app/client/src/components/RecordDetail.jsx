import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RecordForm from './RecordForm';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import { fetchRecord, updateRecord, fetchComments, createComment } from '../services/api';

class RecordDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: '',
      showEditForm: false,
      comments: [],
      showComments: false,
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

  handleChangeComment = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      commentFormData: {
        ...prevState.commentFormData,
        [name]: value
      }
    }))
  }

  handleSubmitComment = async (e) => {
    e.preventDefault();
    const userId = this.props.match.params.user_id;
    const data = this.state.commentFormData;
    const comment = await createComment(userId, data);
    this.setState(prevState => ({
      comments: [...prevState.comments, comment],
      commentFormData: {
        body: '',
      }
    }))
  }

  render() {
    return (
      this.state.showEditForm ?
        <RecordForm
          handleSubmit={this.handleEditRecord}
          user={this.props.user}
          record={this.state.record}
          isEdit={true}
        /> :
        this.state.record &&
        <div>
          <div className='record-detail'>
            <img src={this.state.record.img_url} />
            <div className="record-info">
              <h3><b>{this.state.record.artist}</b></h3>
              <h4>{this.state.record.title}</h4>
              <p><span>Record label:</span> {this.state.record.record_label} - {this.state.record.cat_num}</p>
              <p><span>Year:</span> {this.state.record.year}</p>
              <p><span>Country:</span> {this.state.record.country}</p>
              <p><span>Format:</span> {this.state.record.format} | {this.state.record.speed}</p>
              <p><span>Disc condition:</span> {this.state.record.disc_condition}</p>
              <p><span>Sleeve condition:</span> {this.state.record.sleeve_condition}</p>
            </div>
            <p><em>{this.state.record.description}</em></p>
            <button onClick={this.toggleForm}>edit record</button>
            <button onClick={this.toggleComments}>show comments</button>
          </div>
          <CommentForm
            handleChange={this.handleChangeComment}
            handleSubmit={this.handleSubmitComment}
            formData={this.state.commentFormData}
          />
          <CommentsList
            showComments={this.state.showComments}
            comments={this.state.comments}
            formData={this.state.commentFormData}
            handleChange={this.handleChangeComment}
            handleSubmit={this.handleSubmitComment}
          />
        </div>
    )
  }
}

export default withRouter(RecordDetail);
