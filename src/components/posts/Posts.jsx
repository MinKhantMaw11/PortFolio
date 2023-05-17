import React from 'react'
import "./posts.css";
import Post from '../post/Post';
import Post2 from '../post2/Post2';
import Post3 from '../post3/Post3';
import Post4 from '../post4/Post4';
import Post5 from '../post5/Post5';
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div className='posts'>
        <button className='postId'>
            <Link to="/post/postId"><Post/></Link>
        </button>
        <button className='postId'>
            <Link to="/post/postId"><Post2/></Link>
        </button>
        <button className='postId'>
            <Link to="/post/postId"><Post3/></Link>
        </button>
        <button className='postId'>
            <Link to="/post/postId"><Post4/></Link>
        </button>
        <button className='postId'>
            <Link to="/post/postId"><Post5/></Link>
        </button>
    </div>
  )
}
