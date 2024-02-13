import React, { useContext } from "react";

import { Consumer } from "./Consumer";

import Tweet from "./Tweet";

// import TweetAction from "./tweetAction";

function Tweets() {
  const { dataValue } = useContext(Consumer);

  // console.log(user);
  // console.log(context.dataValue.users);

  return dataValue?.map((tweet, index) => <Tweet key={index} tweet={tweet} />);
}
export default Tweets;
