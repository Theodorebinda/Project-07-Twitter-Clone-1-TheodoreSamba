import Button from "./Button";

// composant qui gere le btn Tweet
function TweetButon(){
    return (
      <>
         <Button  className="capitalize py-3 px-6 border-none rounded-full bg-blue-400 text-base"  label="Tweet" />
      </>
    ) 
}
export default TweetButon
