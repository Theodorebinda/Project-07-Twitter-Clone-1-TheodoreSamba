import TweetEditorInput from "../components/Tweet-editor-input";
import TweetEditorButton from "../components/Tweet-editor-button"

function TweetEditForm(){
    return(
        <div className="tweet-editor-form">
           <TweetEditorInput />
           <TweetEditorButton />
        </div>
        
  
  
    )
  }
  export default TweetEditForm