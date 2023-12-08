import TweetEditorAction from "../components/tweetEditorAction"
import TweetButon from "../components/tweetButon"
// composant qui gere les btns d'action et le btn tweet

function TweetEditorButton(){
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorAction />
      <TweetButon />
    </div>
  )
}
export default TweetEditorButton

