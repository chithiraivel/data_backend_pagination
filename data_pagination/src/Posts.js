import React from 'react';

const Posts = ({ posts}) => {
 
  return (
    <ul className='list-group mb-4' style={{width:'500px',margin:'0 auto'}}>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
            
          {post.id} . {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;