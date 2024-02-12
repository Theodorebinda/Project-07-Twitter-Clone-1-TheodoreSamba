import TweetEditorAction from "../components/tweetEditorAction"
import TweetButon from "../components/tweetButon"
// composant qui gere les btns d'action et le btn tweet

function TweetEditorButton(){
  return (
    <div className="flex items-center justify-between">
      <TweetEditorAction />   
      <button className="capitalize py-3 px-6 border-none rounded-full bg-blue-400 text-base" type="submit">Tweet</button>
    </div>
  )
}
export default TweetEditorButton

