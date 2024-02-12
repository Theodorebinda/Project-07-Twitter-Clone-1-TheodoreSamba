import { createContext, useState } from "react";
import Data from "../data/initial-data.json"

export const Consumer = createContext();

function ContextData({children}) {
const [dataValue, setDataValue] = useState(Data.tweets);
const [dataUsers, setDataUsers] = useState(Data.users);

const addTweet = (newTweet) => {
  setDataValue([newTweet, ...dataValue])
  }

return(
<Consumer.Provider value={{dataValue,addTweet, dataUsers}}>
  {children}
</Consumer.Provider>
) 
}
export default ContextData;