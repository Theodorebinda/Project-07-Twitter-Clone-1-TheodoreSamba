import React from "react";
import profil from "../images/tweet-profile-photo.png";
import tweetProfil from "../images/Tweet-Profile-Photo.svg";
import tweetImage from "../images/tweet-image.png";
import comment from "../icones/actions/Reply.png";
import react from "../icones/actions/React.png";
import retweet from "../icones/actions/Retweet.png";
import share from "../icones/actions/Buton.png"


const tweets = [
    {autor : "CNN",
     tweetAvatar : profil,
     text : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
     image: null,
     actions:
        {
            comment:comment,
            like:react,
            retweet:retweet,
            share:share
         }
     
    
    },
    {  autor : "The New York Times",
        tweetAvatar : tweetProfil,
        text : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
        image : tweetImage,
        actions:
            {
                comment:comment,
                like:react,
                retweet:retweet,
                share:share
             }
         
    },
    { autor : "Twitter",
    tweetAvatar : tweetProfil,
    text : "BIG New lol jk still Twitter",
    image : null,
    actions:
        {
            comment:comment,
            like:react,
            retweet:retweet,
            share:share
         }
     
    }
]
function Tweets (){
    const tweetList = tweets.map((tweet) => (
        <div className="tweet">
            <dir className="tweet-avatar">
                <img  src={tweet.tweetAvatar} alt="" />
            </dir>
            <div className="tweet-content">
                <div className="tweet-body">
                    <strong className="tweet-title-autor">{tweet.autor}</strong> 
                    <p className="tweet-text">{tweet.text}</p>
                    <img className="tweet-image" src={tweet.image} alt="" />
                </div>
                <div className="tweet-actions">
                <img className="tweet-action" src={tweet.actions} alt="" />
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
