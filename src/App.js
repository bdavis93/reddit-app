import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Header } from './Features/header';
import { Subreddit } from './Features/subreddit';
import { Reddit } from './Features/reddit';
import { render } from '@testing-library/react';


const App = () => {
    
  return (
    <div>
      <Header />
      <Subreddit />
      <Reddit />
    </div>
  ); 
}

export default App;
