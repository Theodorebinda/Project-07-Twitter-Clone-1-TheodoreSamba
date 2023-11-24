import React from "react";
import profil from "../images/tweet-profile-photo.png";
import tweetProfil from "../images/Tweet-Profile-Photo.svg";
import tweetImage from "../images/tweet-image.png";
import certified from "../icones/icones/Group.png";
import comment from "../icones/actions/Reply.png";
import reaction from "../icones/actions/React.png";
import retweet from "../icones/actions/Retweet.png";
import share from "../icones/actions/Buton.png"


const tweets = [
    {autor : "CNN",
    isCertified : certified,
    autorDetails : "@CNN. 7m",
     tweetAvatar : profil,
     text : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
     image: null,
     actions:
     [
        {
            label:comment,
            nbre: 123
         },
         {
            label:retweet,
            nbre: 234
         },
         {
            label:reaction,
            nbre:315
         },
         {
            label:share,
            nbre:456
         }
        ]
     
    
    },
    {  autor : "The New York Times",
        isCertified : certified,
        autorDetails : "@nytimes. 2h",
        tweetAvatar : tweetProfil,
        text : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
        image : tweetImage,
        actions:
        [
            {
                label:comment,
                nbre: 123
             },
             {
                label:retweet,
                nbre: 234
             },
             {
                label:reaction,
                nbre:315
             },
             {
                label:share,
                nbre:false
             }
            ]
         
    },
    { autor : "Twitter",
        isCertified : certified,
        autorDetails : "@twitter. Oct 29",
        tweetAvatar : tweetProfil,
        text : "BIG New lol jk still Twitter",
        image : null,
        actions:
        [
            {
                label:comment,
                nbre: 123
             },
             {
                label:retweet,
                nbre: 234
             },
             {
                label:reaction,
                nbre:315
             },
             {
                label:share,
                nbre:false
             }
            ]
     
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
