import React from 'react';
import { withRouter } from 'react-router-dom';

class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        artist: '',
        title: '',
        year: '',
        record_label: '',
        cat_num: '',
        country: '',
        format: '12"',
        speed: '33 rpm',
        disc_condition: 'M',
        sleeve_condition: 'M',
        description: '',
        img_url: '',
        user_id: this.props.match.params.id,
      },
      record: null,
    }
  }

  componentDidMount() {
    const record = this.props.record;
    if (record) {
      const { created_at, updated_at, ...data } = record;
      this.setState({
        record: record,
        formData: data,
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      }
    }))
  }

  //handleSubmit() is passed as a prop from either App
  //or RecordDetail depending on whether this form is Creating
  //or Updating a record
  submit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }

  cancel = (e) => {
    e.preventDefault();
    this.props.isEdit ?
      this.props.cancel() :
      this.props.history.push(`/users/${this.props.match.params.id}/records`)
  }

  render() {
    return (
      <div>
        {this.props.isEdit ?
          <h2>edit record</h2> :
          <h2>add a record</h2>}
        <form
          className="record-form"
          onSubmit={this.submit}>
          <input
            type="text"
            name="artist"
            value={this.state.formData.artist}
            onChange={this.handleChange}
            placeholder="artist"
          />
          <input
            type="text"
            name="title"
            value={this.state.formData.title}
            onChange={this.handleChange}
            placeholder="title"
          />
          <input
            type="number"
            name="year"
            value={this.state.formData.year}
            onChange={this.handleChange}
            placeholder="year"
          />
          <input
            type="text"
            name="record_label"
            value={this.state.formData.record_label}
            onChange={this.handleChange}
            placeholder="record label"
          />
          <input
            type="text"
            name="cat_num"
            value={this.state.formData.cat_num}
            onChange={this.handleChange}
            placeholder="catalog number"
          />
          <input
            type="text"
            name="country"
            value={this.state.formData.country}
            onChange={this.handleChange}
            placeholder="country"
          />
          <label htmlFor="format">size
          <select
              name="format"
              onChange={this.handleChange}
              value={this.state.formData.format}
            >
              <option value='12"'>12"</option>
              <option value='7"'>7"</option>
              <option value='10"'>10"</option>
            </select></label>
          <label htmlFor="speed">speed
          <select
              name="speed"
              onChange={this.handleChange}
              value={this.state.formData.speed}
            >
              <option value='33 rpm'>33 rpm</option>
              <option value='45 rpm'>45 rpm</option>
            </select></label>
          <label htmlFor="disc_condition">disc condition
          <select
              name="disc_condition"
              onChange={this.handleChange}
              value={this.state.formData.disc_condition}
            >
              <option value='M'>M</option>
              <option value='NM'>NM</option>
              <option value='VG+'>VG+</option>
              <option value='VG'>VG</option>
              <option value='G+'>G+</option>
              <option value='G'>G</option>
              <option value='F'>F</option>
              <option value='P'>P</option>
            </select></label>
          <label htmlFor="sleeve_condition">sleeve condition
          <select
              name="sleeve_condition"
              onChange={this.handleChange}
              value={this.state.formData.sleeve_condition}
            >
              <option value='M'>M</option>
              <option value='NM'>NM</option>
              <option value='VG+'>VG+</option>
              <option value='VG'>VG</option>
              <option value='G+'>G+</option>
              <option value='G'>G</option>
              <option value='F'>F</option>
              <option value='P'>P</option>
            </select></label>
          <input
            type="text"
            name="description"
            value={this.state.formData.description}
            onChange={this.handleChange}
            placeholder="description"
          />
          <input
            type="text"
            name="img_url"
            value={this.state.formData.img_url}
            onChange={this.handleChange}
            placeholder="image url"
          />
          <button>submit</button>
          <button onClick={this.cancel}>cancel</button>
        </form>
      </div>
    )
  }
}

export default withRouter(RecordForm);