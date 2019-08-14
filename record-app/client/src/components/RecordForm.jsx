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
        user_id: this.props.userId,
      },
      record: null,
    }
  }

  componentDidMount() {
    const record = this.props.user.records.find(record =>
      record.id === parseInt(this.props.match.params.id));
    if (record) {
      this.setState({
        record: record,
        formData: {
          artist: record.artist,
          title: record.title,
          year: record.year,
          record_label: record.record_label,
          cat_num: record.cat_num,
          country: record.country,
          format: record.format,
          speed: record.speed,
          disc_condition: record.disc_condition,
          sleeve_condition: record.sleeve_condition,
          description: record.description,
          img_url: record.img_url,
          user_id: this.props.userId,
        },
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

  render() {
    return (
      <div>
        {this.props.match.params.id ?
          <h2>EDIT RECORD</h2> :
          <h2>ADD A RECORD</h2>}
        <form
          className="record-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.state.record ?
              this.props.handleSubmit(this.state.record.id, this.state.formData) :
              this.props.handleSubmit(this.state.formData);
          }}>
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
          <select
            name="format"
            onChange={this.handleChange}
            value={this.state.formData.format}
          >
            <option value='12"'>12"</option>
            <option value='7"'>7"</option>
            <option value='10"'>10"</option>
          </select>
          <select
            name="speed"
            onChange={this.handleChange}
            value={this.state.formData.speed}
          >
            <option value='33 rpm'>33 rpm</option>
            <option value='45 rpm'>45 rpm</option>
          </select>
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
          </select>
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
          </select>
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
          <button>submit record</button>
        </form>
      </div>
    )
  }
}

export default withRouter(RecordForm);