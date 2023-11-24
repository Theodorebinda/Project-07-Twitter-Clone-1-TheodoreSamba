import profil from "../images/tweet-profile-photo.png";
import tweetProfil from "../images/Tweet-Profile-Photo.svg";
import tweetImage from "../images/tweet-image.png";
import certified from "../icones/icones/Group.png";
import comment from "../icones/actions/Reply.png";
import reaction from "../icones/actions/React.png";
import retweet from "../icones/actions/Retweet.png";
import share from "../icones/actions/Buton.png";
import profilTweet from "../images/image 1.png";
import profilKadea from "../images/KadeaProfif.jpg";
import contentKadea from "../images/imagePubliKadea.jpeg"

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
                nbre: 19
             },
             {
                label:retweet,
                nbre: 48
             },
             {
                label:reaction,
                nbre:482
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
        tweetAvatar : profilTweet,
        text : "BIG New lol jk still Twitter",
        image : null,
        actions:
        [
            {
                label:comment,
                nbre: "6.8K"
             },
             {
                label:retweet,
                nbre: "36.6K"
             },
             {
                label:reaction,
                nbre:"267.1K"
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
    tweetAvatar : profilTweet,
    text : "BIG New lol jk still Twitter",
    image : null,
    actions:
    [
        {
            label:comment,
            nbre: "118.7K"
         },
         {
            label:retweet,
            nbre: "785.4K"
         },
         {
            label:reaction,
            nbre:"3.3M"
         },
         {
            label:share,
            nbre:false
         }
        ]
 
},
{ autor : "KadeaAcademy",
isCertified : false,
autorDetails : "@Kda243",
tweetAvatar : profilKadea,
text : "Atelier d'initiation au codage informatique #Resicodi🤝 #Kda243",
image : contentKadea,
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
export default tweets