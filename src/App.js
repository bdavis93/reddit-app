import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Header } from './Components/header';
import { Subreddit } from './Components/subreddit';
import { Reddit } from './Components/reddit';


function App() {

    const [state, setState] = useState({name: 'Blake', title: 'my post', selftext: 'sample text'},
    {name: 'Blake', title: 'my post', selftext: 'sample text' },
    {name: 'Blake', title: 'my post', selftext: 'sample text' });

    function renderPosts() {
      const userPosts = [];
      for(let i = 0; i < state.length; i++) {
        let name = state[i].name;
        let title = state[i].title;
        let text = state[i].selftext;
        userPosts.push(<Reddit text={text}/>);
      }
      return userPosts;
    }
    
  return (
    <div>
      <Header />
      <Subreddit />
      {renderPosts()}
    </div>
  );
}

export default App;
