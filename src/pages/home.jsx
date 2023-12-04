import React from 'react';
import Header from '../components/header';
import TweetteEditor from '../components/Tweette-editor';
// import Tweet from '../components/Tweet';
import Tweets from '../components/Tweets';

function Home() {
  return (
    <main className="timeline">
       <Header />
      <TweetteEditor />
      <Tweets />
    </main>
  );
}

export default Home;