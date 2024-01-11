import React from "react";
import tweets from "../utiles/tweet"
import { Link } from "react-router-dom";
// import TweetAction from "./tweetAction";

function Tweets() {
  const tweetsElement = tweets.map((tweet, index) => (
    <div key={index} className="tweet">
      <Link to={`/profil/${tweet.author}`} className="tweet-avatar">
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
          {/* TweetActions */}
          <div className="tweet-actions">
              <button className="button-tranparent action-buttons action-hover action-hover-blue" onClick={() => {handleClick()}}>
                <img className="action-hover-blue" alt="" src={tweet.actions.labelComment} />
                <div className="nbre-action">
                  {tweet.actions.nbreComment}
                </div>
              </button>
              <button className="button-tranparent action-buttons action-hover action-hover-gren" onClick={() => {handleClick()}}>
                <img alt="" src={tweet.actions.labelRetweet} />
                <div className="nbre-action">
                  {tweet.actions.nbreRetweet}
                </div>
              </button>
              <button className="button-tranparent action-buttons action-hover action-hover-red" onClick={() => {handleClick()}}>
                <img alt="" src={tweet.actions.labelReaction} />
                <div className="nbre-action">
                  {tweet.actions.nbreReaction}
                </div>
              </button>
              <button className="button-tranparent action-buttons action-hover action-hover-blue" onClick={() => {handleClick()}}>
                <img alt="" src={tweet.actions.labelShare} />
              </button>
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
