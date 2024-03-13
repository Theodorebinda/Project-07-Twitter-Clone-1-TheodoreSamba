import { createContext, useEffect, useState } from "react";
import Data from "../data/initial-data.json";
import axios from "axios";

export const Consumer = createContext();

function ContextData({ children }) {
  const [dataValue, setDataValue] = useState([]);
  const [dataUsers, setDataUsers] = useState(Data.users);

  useEffect(() => {
    axios.get("http://localhost:3000/tweets").then((response) => {
      setDataValue(response.data);
      console.log(response.data);
    });
  }, []);
  // useEffect(() => {
  //   axios.get("http://localhost:3000/users").then((response) => {
  //     setDataValue(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  const addTweet = (newTweet) => {
    setDataValue([newTweet, ...dataValue]);
    axios
      .post("http://localhost:3000/tweets", newTweet)
      .then((response) => setDataValue([response.data, ...newTweet]));
  };

  const toggleLike = async (tweetId) => {
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
