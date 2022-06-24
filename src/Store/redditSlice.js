import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../API/redditAPI';

const initialState = {
    posts: []
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        getPostsSuccess(state, action) {
            state.posts = action.payload;
        }
    }
})

export const { getPostsSuccess } = redditSlice.actions;

export default redditSlice.reducer;


