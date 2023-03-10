import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Posts from './Posts';

const FirstPage = () => {

  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      // setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <h1 className='text-primary mb-3' style={{marginTop:'100px'}}></h1>
      <Posts posts={currentPosts}  />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default FirstPage