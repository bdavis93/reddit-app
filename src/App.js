import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './Components/header';
import { Subreddit } from './Components/subreddit';
import { Reddit } from './Components/reddit';

function App() {
  return (
    <div>
      <Header />
      <Subreddit />
      <Reddit />
    </div>
  );
}

export default App;
