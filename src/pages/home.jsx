import React from 'react';
import Header from '../components/header';
import TweetteEditor from '../components/Tweette-editor';
import Buton from '../components/Tweet-editor-button';

function Home() {
  return (
    <main className="timeline">
       <Header />
      <TweetteEditor />
      <Buton />
    </main>
  );
}

export default Home;