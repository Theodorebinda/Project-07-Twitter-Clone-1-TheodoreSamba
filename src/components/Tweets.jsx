import React, { useContext } from "react";
import { Consumer } from "./Consumer";
import Tweet from "./Tweet";

function Tweets() {
  const { dataValue } = useContext(Consumer);
  const sortedTweets = dataValue?.slice().sort((a, b) => {
    const dateA = new Date(a.times);
    const dateB = new Date(b.times);
    return dateB - dateA;
  });
  return sortedTweets?.map((tweet, index) => (
    <Tweet key={index} tweet={tweet} />
  ));
}
export default Tweets;
