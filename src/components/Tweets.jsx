import React from "react";
import tweets from "../utiles/tweet"
import { Link } from "react-router-dom";
import TweetAction from "./tweetAction";

function Tweets() {
  const tweetsElement = tweets.map((tweet, index) => (
    <div key={index} className="tweet">
      <Link to="/profil/followers" className="tweet-avatar">
        <img src={tweet.tweetAvatar} alt="" />
      </Link>
      <div className="tweet-content">
        <div className="tweet-body">
          <Link to="/profil/followers" className="tweet-title">
            <h4 ><span className="tweet-title-author" href="#">{tweet.author}</span></h4>
            <img src={tweet.isCertified ? tweet.isCertified : null} alt="" />
            <p ><span className="tweet-title-details" href="#" >{tweet.autorDetails}{tweet.times}</span></p>
          </Link>
          <div className="tweet-text">
            <p >{tweet.text}</p>
          </div>
          <div className="tweet-image">
            <a href={tweet.image} target="_blank"><img src={tweet.image ? tweet.image : null} alt="" /></a>
          </div>
          <div className="tweet-actions">
           <TweetAction />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {tweetsElement}
    </>
  )
}
export default Tweets
