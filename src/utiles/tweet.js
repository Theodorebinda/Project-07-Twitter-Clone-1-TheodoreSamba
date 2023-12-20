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
    actions:
      [
        {
          id : 1,
          label: comment,
          nbre: 123
        },
        {
          id : 2,
          label: retweet,
          nbre: 234
        },
        {
          id : 3,
          label: reaction,
          nbre: 315
        },
        {
          id : 4,
          label: share,
          nbre: false
        }
      ]
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
    actions:
      [
        {
          label: comment,
          nbre: 19
        },
        {
          label: retweet,
          nbre: 48
        },
        {
          label: reaction,
          nbre: 482
        },
        {
          label: share,
          nbre: false
        }
      ]

  },
  {
    id: 3,
    author: "Twitter",
    isCertified: certified,
    autorDetails: "@twitter.",
    times: "  Oct 29",
    tweetAvatar: profilTweet,
    text: "BIG New lol jk still Twitter",
    image: null,
    actions:
      [
        {
          label: comment,
          nbre: "6.8K"
        },
        {
          label: retweet,
          nbre: "36.6K"
        },
        {
          label: reaction,
          nbre: "267.1K"
        },
        {
          label: share,
          nbre: false
        }
      ]

  },
  {
    id: 4,
    author: "Twitter",
    isCertified: certified,
    autorDetails: "@twitter.",
    times: "  Oct 29",
    tweetAvatar: profilTweet,
    text: "hello literally everyone",
    image: null,
    actions:

      [
        {
          label: comment,
          nbre: "118.7K"
        },
        {
          label: retweet,
          nbre: "785.4K"
        },
        {
          label: reaction,
          nbre: "3.3M"
        },
        {
          label: share,
          nbre: false
        }
      ]

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
    actions:

      [
        {
          label: comment,
          nbre: 12
        },
        {
          label: retweet,
          nbre: 48
        },
        {
          label: reaction,
          nbre: 100
        },
        {
          label: share,
          nbre: false
        }
      ]

  }
]
export default tweets