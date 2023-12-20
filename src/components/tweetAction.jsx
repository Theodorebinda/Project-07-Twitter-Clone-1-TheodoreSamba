import { useState } from "react";
import tweets from "../utiles/tweet"


function TweetAction() {
    const classListAction = ["action-hover-blue", "action-hover-green", "action-hover-red","action-hover-blue"]
    const [currentClass, setCurrentClass] = useState(classListAction[0]);
    return(
        <>
            <div className="tweet-actions">
                {tweets.actions.map(({label, nbre}) =>
                <div key={tweets.actions.id} className="tweet-action">
                    <button  className={currentClass} >
                    <img alt="" src={label} />
                    </button>

                </div>

                )}
            </div>
        </>
    )
}
// export default TweetAction
