import fetch from 'isomorphic-fetch';

const url = 'https://jsonplaceholder.typicode.com';

export const Post = {

  posts: [],
  loaded: false,
  post: (postId) => {
    return new Promise(resolve => {
      fetch(`${url}/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
          resolve(post)
        })
    });
  },
  user: (userId) => {
    return new Promise(resolve => {
      fetch(`${url}/users/${userId}`)
        .then(response => response.json())
        .then(user => {
          resolve(user)
        })
    })
  }
}