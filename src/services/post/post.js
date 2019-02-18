import fetch from 'isomorphic-fetch';

const url = 'https://jsonplaceholder.typicode.com';

export const Post = {
  posts: [],
  loaded: false,
  load: (count) => {
    return new Promise(resolve => {
      if (!Post.loaded) {
        Post.loaded = true;
        fetch(`${url}/posts`)
          .then(response => response.json())
          .then(posts => {
            Post.posts = posts;
            resolve(Post.posts.splice(0, count));
          });
        } else {
          resolve(Post.posts.splice(0, count));
      }
    });
  }
}