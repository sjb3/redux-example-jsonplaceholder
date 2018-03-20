import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  // As using redux no need constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(next) {

  }

  render() {
    const postItems = this.props.posts.map((post, i) => (
      <div key={i}> <h3>{post.title}</h3>
      <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>POSTS</h1>
          {postItems}
      </div>
    )
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);