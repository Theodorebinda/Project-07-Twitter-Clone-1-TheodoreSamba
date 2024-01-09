import { useState } from "react";
import tweets from "../utiles/tweet"


function TweetAction(props) {
  const [nbre, setNbre] = useState(0)
    return(
        <>
            <div className="tweet-actions">
              {tweets.slice(0,1).map(tweet => 
                tweet.actions.map(({label, nbre}) =>
                  <div  className="tweet-action">
                    <button className="button-tranparent action-buttons" onClick={() => setNbre(nbre + 1)}>
                      <img alt="" src={label} />
                      {nbre}
                    </button>
                  </div>
              ))}
            </div>
        </>
    )
}
export default TweetAction;
