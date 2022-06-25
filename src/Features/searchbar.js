import React from 'react';
import { getSubredditPosts } from '../API/redditAPI';
import { getPostsSuccess } from '../Store/redditSlice';

export const Searchbar = () => {

    const dispatch = useDispatch();
    const searchTerm = (e) => {
        const apiResults = getSubredditPosts(e.target.value);
        dispatch(getPostsSuccess(apiResults));
    }
    return (
        <form onSubmit={searchTerm}>
            <input class="form" type="text" id="query" name="query" placeholder="Search..." />
            <input type="submit" />
        </form>
    )
}