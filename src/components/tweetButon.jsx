import { useContext } from "react";
import Button from "./Button";
import { Consumer } from "./Consumer";

// composant qui gere le btn Tweet
function TweetButon(){
  const {addTweet} = useContext(Consumer)
  const addClick = () => {
    addTweet();
  };
  
    return (
      <>
         <Button  className="capitalize py-3 px-6 border-none rounded-full bg-blue-400 text-base"  label="Tweet"  onClick={(e) => {
              e.preventDefault(); addClick();
            }}/>
      </>
    ) 
}
export default TweetButon
