import React from 'react';
import Header from '../components/header';
import TweetteEditor from '../components/Tweette-editor';
import Tweet from '../components/Tweet';

function Home() {
  return (
    <main className="timeline">
       <Header />
      <TweetteEditor />
      <Tweet />
    </main>
  );
}

export default Home;