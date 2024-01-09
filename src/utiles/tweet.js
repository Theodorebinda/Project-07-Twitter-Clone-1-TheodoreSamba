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
  {
    id: 1,
    author: "CNN",
    isCertified: certified,
    autorDetails: "@CNN.",
    times: "  7m",
    tweetAvatar: profil,
    text: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
    image: null,
    couvertureImage : "",
    nbrsPostes : 100,
    description :"",
    abonnement: 100,
    abonne: 950,
    actions:
        {
          labelComment: comment,
          nbreComment: 123,

          labelRetweet: retweet,
          nbreRetweet: 234, 

          labelReaction: reaction,
          nbreReaction: 315,

          labelShare: share,
        }
      
  },
  {
    id: 2,
    author: "The New York Times",
    isCertified: certified,
    autorDetails: "@nytimes.",
    times: "  2h",
    tweetAvatar: tweetProfil,
    text: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
    image: tweetImage,
    couvertureImage : "",
    nbrsPostes : 100,
    description :"",
    abonnement: 100,
    abonne: 950,
    actions:
    {
      labelComment: comment,
      nbreComment: 567,

      labelRetweet: retweet,
      nbreRetweet: 256, 

      labelReaction: reaction,
      nbreReaction: 600,

      labelShare: share,
    }

  },
  {
    id: 3,
    author: "Twitter",
    isCertified: certified,
    autorDetails: "@twitter.",
    times: "  Oct 29",
    tweetAvatar: profilTweet,
    text: "BIG New lol jk still Twitter,BIG New lol jk still Twitter,BIG New lol jk still Twitter,BIG New lol jk still Twitter,BIG New lol jk still Twitter,BIG New lol jk still Twitter,BIG New lol jk still Twitter,BIG New lol jk still Twitter,  ",
    image: null,
    couvertureImage : "",
    nbrsPostes : 100,
    description :"",
    abonnement: 100,
    abonne: 950,
    actions:
    {
      labelComment: comment,
      nbreComment: 89,

      labelRetweet: retweet,
      nbreRetweet: 208, 

      labelReaction: reaction,
      nbreReaction: 900,

      labelShare: share,
    }

  },
  {
    id: 4,
    author: "Twitter",
    isCertified: certified,
    autorDetails: "@twitter.",
    times: "  Oct 29",
    tweetAvatar: profilTweet,
    text: "hello literally everyone hello literally everyonehello literally everyonehello literally everyonehello literally everyone",
    image: null,
    couvertureImage : "",
    nbrsPostes : 100,
    description :"",
    abonnement: 100,
    abonne: 950,
    actions:
    {
      labelComment: comment,
      nbreComment: 589,

      labelRetweet: retweet,
      nbreRetweet: 590, 

      labelReaction: reaction,
      nbreReaction: 890,

      labelShare: share,
    }

  },
  {
    id: 5,
    author: "KadeaAcademy",
    isCertified: false,
    autorDetails: "@Kda243",
    times: "  insta",
    tweetAvatar: profilKadea,
    text: "Atelier d'initiation au codage informatique #Resicodi🤝 #Kda243",
    image: contentKadea,
    couvertureImage : "",
    nbrsPostes : 100,
    description :"",
    abonnement: 100,
    abonne: 950,
    actions:

    {
      labelComment: comment,
      nbreComment: 17,

      labelRetweet: retweet,
      nbreRetweet: 7, 

      labelReaction: reaction,
      nbreReaction: 90,

      labelShare: share,
    }

  }
]
export default tweets