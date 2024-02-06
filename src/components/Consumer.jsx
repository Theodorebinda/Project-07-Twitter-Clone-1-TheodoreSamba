import { createContext, useState } from "react";
import tweets from "../utiles/tweet";
import certified from "../icones/icones/Group.png"
import profil from "../images/profile-photo.png";
import couvImage from "../images/1500x500.jpg";
import comment from "../icones/actions/Reply.png";
import reaction from "../icones/actions/React.png";
import retweet from "../icones/actions/Retweet.png";
import share from "../icones/actions/Buton.png";





export const Consumer = createContext();

function ContextData({children}) {
const [dataValue,setDataValue] = useState(tweets);
const [inputValue,setInputValue] = useState('');
  
const addTweet = () => {
  if(inputValue !== ''){
    const dataValueTemporary = dataValue;
    dataValueTemporary.unshift(
      {
        id:dataValue.length +1,
        author:  "Bradley Ortiz",
        isCertified: false,
        autorDetails: "@bradley.",
        times: "instant",
        tweetAvatar: profil,
        text: inputValue,
        image: null,
        couvertureImage : couvImage,
        nbrsPostes : 678,
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

      }
    )
  setDataValue(dataValueTemporary)
  setInputValue('');
  }
}
return(
<Consumer.Provider value={{dataValue,addTweet,inputValue,setInputValue}}>
  {children}
</Consumer.Provider>
) 
}
export default ContextData;