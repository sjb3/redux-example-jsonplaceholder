import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';


class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    // Call action
    this.props.createPost(post);
    }

  render () {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <input
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.onChange}/>
          </div>
          <br />
          <div>
            <label>Body: </label>
            <textarea name='body' value={this.state.body} onChange={this.onChange}/>
          </div>
          <br />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

Postform.PropTypes = {
  createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost })(Postform)