import fetch from 'isomorphic-fetch';

const url = 'https://jsonplaceholder.typicode.com';

export const Post = {

  posts: [],
  loaded: false,
  post: (postId) => {
    return new Promise((resolve, reject) => {
      fetch(`${url}/posts/${postId}`)
        .then(response => {
          response.ok ? resolve(response.json()) : reject(new Error(`Request status: ${response.status} :(`));
        });
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