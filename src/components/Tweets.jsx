import React from "react";
import tweets from "../utiles/tweet"
import { Link } from "react-router-dom";
import TweetAction from "./tweetAction";

function Tweets() {
  const tweetsElement = tweets.map((tweet) => (
    <div key={tweet.id} className="tweet">
      <Link to="/profil/followers" className="tweet-avatar">
        <img src={tweet.tweetAvatar} alt="" />
      </Link>
      <div className="tweet-content">
        <div className="tweet-body">
          <Link to="/profil/followers" className="tweet-title">
            <h4 ><a className="tweet-title-author" href="#">{tweet.author}</a></h4>
            <img src={tweet.isCertified ? tweet.isCertified : null} alt="" />
            <p ><a className="tweet-title-details" href="#" >{tweet.autorDetails}{tweet.times}</a></p>
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
