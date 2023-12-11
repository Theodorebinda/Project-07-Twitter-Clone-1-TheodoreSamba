import React from "react";
import tweets from "../utiles/tweet"

function Tweets() {

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweet">
          <div className="tweet-avatar">
            <img src={tweet.tweetAvatar} alt="" />
          </div>
          <div className="tweet-content">
            <div className="tweet-body">
              <div className="tweet-title">
                <h4 ><a className="tweet-title-author" href="#">{tweet.author}</a></h4>
                <img src={tweet.isCertified ? tweet.isCertified : null} alt="" />
                <p ><a className="tweet-title-details" href="#" >{tweet.autorDetails}{tweet.times}</a></p>
              </div>
              <div className="tweet-text">
                <p >{tweet.text}</p>
              </div>
              <div className="tweet-image">
                <a href={tweet.image} target="_blank"><img src={tweet.image ? tweet.image : null} alt="" /></a>
              </div>
            </div>
            <div className="tweet-actions">
              {tweet.actions.map(({ label, nbre }) =>
                <div className="tweet-action">
                  <button className="button-tranparent">
                  <img alt="" src={label} />
                  </button>
                  <div>{nbre}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))};
    </>
  )
}
export default Tweets
