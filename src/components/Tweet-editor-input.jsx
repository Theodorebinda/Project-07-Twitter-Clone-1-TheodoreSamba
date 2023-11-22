import React from 'react';
import TweetteEditor from "../components/Tweette-editor"

function TweetEditorInput(){
  return (
    <div className="tweet-editor-input">
      <textarea placeholder="What's happening?"></textarea>
      <TweetteEditor />
    </div>
  )
}
export default TweetEditorInput