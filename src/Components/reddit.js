import React from 'react';
import redditDog from '../reddit-dog-pic.jpeg';

export const Reddit = ({ text }) => {

    
    return (
        <div class="redditContainer">
                    <div class="reddit">
                        <h2>{text}</h2>
                        <img src={redditDog}></img>
                        <p>Comments</p>
                    </div>
                    
            
        </div>
    )
}