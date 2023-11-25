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
    { id : 1,
      autor : "CNN",
      isCertified : certified,
      autorDetails : "@CNN. 7m",
      tweetAvatar : profil,
      text : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
      image: null,
      actions:
     [
        {   
            id:1,
            label:comment,
            nbre: 123
         },
         {
            id:2,
            label:retweet,
            nbre: 234
         },
         {
            id:3,
            label:reaction,
            nbre:315
         },
         {
            id:4,
            label:share,
            nbre:false
         }
        ]
     
    
    },
    { id : 2,
      autor : "The New York Times",
      isCertified : certified,
      autorDetails : "@nytimes. 2h",
      tweetAvatar : tweetProfil,
      text : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
      image : tweetImage,
      actions:
        [
            {
               id:1,
               label:comment,
               nbre: 19
             },
             {
               id:2,
               label:retweet,
               nbre: 48
             },
             {
               id:3,
               label:reaction,
               nbre:482
             },
             {
               id:4,
               label:share,
               nbre:false
             }
            ]
         
    },
    { id : 3,
      autor : "Twitter",
      isCertified : certified,
      autorDetails : "@twitter. Oct 29",
      tweetAvatar : profilTweet,
      text : "BIG New lol jk still Twitter",
      image : null,
      actions:
        [
         {
            id:1,
            label:comment,
            nbre: 19
          },
          {
            id:2,
            label:retweet,
            nbre: 48
          },
          {
            id:3,
            label:reaction,
            nbre:482
          },
          {
            id:4,
             label:share,
             nbre:false
          }
         ]
     
    },
   {  id : 4,
      autor : "Twitter",
      isCertified : certified,
      autorDetails : "@twitter. Oct 29",
      tweetAvatar : profilTweet,
      text : "hello literally everyone",
      image : null,
      actions:
   
      [
         {
            id:1,
            label:comment,
            nbre: 19
          },
          {
            id:2,
            label:retweet,
            nbre: 48
          },
          {
            id:3,
            label:reaction,
            nbre:482
          },
          {
            id:4,
             label:share,
             nbre:false
          }
         ]
 
},
{  id : 5,
   autor : "KadeaAcademy",
   isCertified : false,
   autorDetails : "@Kda243",
   tweetAvatar : profilKadea,
   text : "Atelier d'initiation au codage informatique #Resicodi🤝 #Kda243",
   image : contentKadea,
   actions:

   [
      {
         id:1,
         label:comment,
         nbre: 19
       },
       {
         id:2,
         label:retweet,
         nbre: 48
       },
       {
         id:3,
         label:reaction,
         nbre:482
       },
       {
         id:4,
          label:share,
          nbre:false
       }
      ]

}
]
export default tweets