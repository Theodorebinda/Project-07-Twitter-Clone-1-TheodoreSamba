import TweetEditorAction from "../components/tweetEditorAction"
import TweetButon from "../components/tweetButon"
// composant qui gere les btns d'action et le btn tweet

function TweetEditorButton(){
  return (
    <div className="flex items-center justify-between">
      <TweetEditorAction />
      <TweetButon />
    </div>
  )
}
export default TweetEditorButton

