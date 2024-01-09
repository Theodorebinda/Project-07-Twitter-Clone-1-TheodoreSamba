import { useState } from "react";
import tweets from "../utiles/tweet"


function TweetAction(props) {
  const [likeTweet, setLikeTweet] = useState(props);
  const [isLikeTweet, setIsLikeTweet] = useState(false);

  const handleClick = () => {
    if (isLikeTweet) {
      setLikeTweet(likeTweet - 1);
      setIsLikeTweet(false);
    } else {
      setLikeTweet(likeTweet + 1);
      setIsLikeTweet(true);
    }
  };
    return(
        <>
            <div className="tweet-actions">
              {tweets.slice(0,1).map(tweet => 
                tweet.actions.map(({label, nbre}, index) =>
                  <div key={index} className="tweet-action">
                    <button className="button-tranparent action-buttons" onClick={() => {handleClick()}}>
                      <img alt="" src={label} />
                      <div className="nbre-action">
                        {nbre}
                      </div>
                    </button>
                  </div>
              ))}
            </div>
        </>
    )
}
export default TweetAction;
