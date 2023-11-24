import React from "react";
import tweets from "../utiles/tweet"

function Tweets (){
    const tweetList = tweets.map((tweet) => (
        <div className="tweet">
            <div className="tweet-avatar">
                <img src={tweet.tweetAvatar} alt="" />
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <strong className="tweet-title-autor">{tweet.autor}</strong> 
                        <img  src={tweet.isCertified} alt="" />
                        <p className="tweet-title-details">{tweet.autorDetails}</p>
                    </div>
                    <div className="tweet-text">
                    <p >{tweet.text}</p>
                    </div>
                    <div className="tweet-image">
                        <img  src={tweet.image} alt="" />
                    </div>
                </div>
                <div className="tweet-actions">
                    {tweet.actions.map(({label,nbre}) =>
                    <div className="tweet-action"> 
                        <img  alt="" src={label}/>
                        <div>{nbre}</div>

                    </div>
                     )}


                </div>
            </div>
            
            
        </div>
      ));
    return (
        <>
            {tweetList}
        </> 
    )
}
export default Tweets
