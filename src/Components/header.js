import React from "react";
import redditPic from '../RedditSlim (3).png';
import { Searchbar } from './searchbar';

export const Header = () => {
    return (
        <div class="header">
            <img class='logo' src={redditPic} />
            <Searchbar />
        </div>

    )
}