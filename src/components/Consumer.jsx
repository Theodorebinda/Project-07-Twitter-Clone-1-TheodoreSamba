import { createContext, useState } from "react";
import Data from "../data/initial-data.json"







export const Consumer = createContext();

function ContextData({children}) {
const [dataValue,setDataValue] = useState(Data);
const [inputValue,setInputValue] = useState('');
  
const addTweet = () => {
  if(inputValue !== ''){
    const dataValueTemporary = dataValue.tweets;
    dataValueTemporary.unshift(
      {
        tweetId:dataValue.tweets.length +1,
        userId :dataValue.users.Id,
        times: "instant",
        text: inputValue,
        image: null,
        isLogin : true,
        actions:
            {
            nbreComment: 123,
            nbreRetweet: 234, 
            nbreReaction: 315,
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