import React from 'react';
import redditDog from '../reddit-dog-pic.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsSuccess } from '../Store/redditSlice';

export const Reddit = (props) => {
const {id, title, url} = props;
const posts = useSelector((state) => state.redditPosts);
const dispatch = useDispatch();
    
    return (
        <div class="redditContainer">
            {posts.map(post => (
                <div class="reddit">
                    <h2>{post.title}</h2>
                    <img src={post.url}></img>
                <p>Comments</p>
            </div>
            ))}
                    
                    
            
        </div>
    )
}