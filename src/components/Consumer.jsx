import { createContext, useState } from "react";
import Data from "../data/initial-data.json";

export const Consumer = createContext();

function ContextData({ children }) {
  const [dataValue, setDataValue] = useState(Data.tweets);
  const [dataUsers, setDataUsers] = useState(Data.users);

  const addTweet = (newTweet) => {
    setDataValue([newTweet, ...dataValue]);
  };

  const toggleLike = (tweetId) => {
    const updatedTweets = dataValue.map((tweet) => {
      if (tweet.tweetId === tweetId) {
        const newLikeCount = tweet.isLikeTweet
          ? tweet.actions.nbreReaction - 1
          : tweet.actions.nbreReaction + 1;
        return {
          ...tweet,
          actions: {
            ...tweet.actions,
            nbreReaction: newLikeCount,
          },
          isLikeTweet: !tweet.isLikeTweet,
        };
      }
      return tweet;
    });
    setDataValue(updatedTweets);
  };

  return (
    <Consumer.Provider value={{ dataValue, addTweet, dataUsers, toggleLike }}>
      {children}
    </Consumer.Provider>
  );
}
export default ContextData;
