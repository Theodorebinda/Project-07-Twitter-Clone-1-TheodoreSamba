import React, { useContext } from "react";
import { Consumer } from "./Consumer";
import Tweet from "./Tweet";

function Tweets() {
  const { dataValue } = useContext(Consumer);

  return dataValue?.map((tweet, index) => <Tweet key={index} tweet={tweet} />);
}
export default Tweets;
