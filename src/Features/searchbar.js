import React, {useEffect} from 'react';
import { getSubredditPosts } from '../API/redditAPI';
import { getPostsSuccess } from '../Store/redditSlice';
import { useDispatch } from 'react-redux';

export const Searchbar = () => {

    const dispatch = useDispatch();
    const searchTerm = (e) => {
        const apiResults = getSubredditPosts(e.target.value);
        dispatch(getPostsSuccess(apiResults));
    }
   
    return (
        <form id="search" >
            <input class="form" type="text" onChange={searchTerm} id="query" name="query" placeholder="Search..." />
            <input type="submit" />
        </form>
    )
}