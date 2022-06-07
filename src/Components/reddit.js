import React from 'react';
import redditDog from '../reddit-dog-pic.jpeg';

export const Reddit = () => {
    return (
        <div class="redditContainer">
            <div class="reddit">
                <h2>Text from Reddit title......</h2>
                <img src={redditDog}></img>
                <p>Comments</p>
            </div>
             <div class="reddit">
                <h2>Text from Reddit title......</h2>
                <img src={redditDog}></img>
                <p>Comments</p>
            </div>
        </div>
    )
}