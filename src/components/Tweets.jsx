import React from "react";
import tweets from "../utiles/tweet"

function Tweets (){
    const tweetList = tweets.map((tweet) => (
        <div  key={tweet.id} className="tweet">
            <div className="tweet-avatar">
                <img src={tweet.tweetAvatar} alt="" />
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <h4 ><a className="tweet-title-author" href="#">{tweet.autor}</a></h4> 
                        {tweet.isCertified && <img  src={tweet.isCertified } alt="" />}
                        <p ><a className="tweet-title-details" href="#" >{tweet.autorDetails}</a></p>
                    </div>
                    <div className="tweet-text">
                    <p >{tweet.text}</p>
                    </div>
                    <div className="tweet-image">
                        <a href={tweet.image} target="_blank"><img  src={tweet.image? tweet.image: null} alt="" /></a>
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
