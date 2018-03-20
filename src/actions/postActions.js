import { FETCH_POSTS, NEW_POST } from './types';
import Posts from '../components/Posts';

// thunk enables async methods so you can call the function inside of fetchPosts passing dispatch
// export function fetchPosts() {
//   return function(dispatch) {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(Posts => dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       }));
//   }
// }

// more ES6 way of above;
export const fetchPosts = () => dispatch => {

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}

export const createPost = (postData) => dispatch => {

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    header: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
    }));
}