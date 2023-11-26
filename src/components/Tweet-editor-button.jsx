import TweetEditorAction from "../components/tweetEditorAction"
import Buton from "../components/tweetButon"
// composant qui gere les btns d'action et le btn tweet

function TweetEditorButton(){
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorAction />
      <Buton />
    </div>
  )
}
export default TweetEditorButton

