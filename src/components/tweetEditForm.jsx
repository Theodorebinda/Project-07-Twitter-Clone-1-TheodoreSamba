import TweetEditorInput from "../components/Tweet-editor-input";
import TweetEditorButton from "../components/Tweet-editor-button"
// Composant qui prend en compte les entrees du tweet et les bts d'action d'utilasateur
function TweetEditForm(){
    return(
        <div className="flex-auto">
           <TweetEditorInput />
           <TweetEditorButton />
        </div>
        
  
  
    )
  }
  export default TweetEditForm