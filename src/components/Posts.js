import React from 'react';

const Posts = ({ posts, isLoading }) => {
  return isLoading ? (
    <h2>Is loading...</h2>
  ) : (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
