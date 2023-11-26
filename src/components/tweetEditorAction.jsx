import emoji from "../icones/icones/Emoji.png"
import schedule from "../icones/icones/Schedule.png"
import gif from "../icones/icones/Gif.png"
import poll from "../icones/icones/Poll.png"
import media from "../icones/icones/img.png"
// Composant qui gere les btns d'action dans l'editeur de tweet
function TweetEditorAction(){
    const butonMetas =[media,gif,poll,emoji,schedule];
        return (
            <div className="tweet-editor-actions">
            {butonMetas.map((butonMeta) =>  <button >
                <img src={butonMeta} alt="" />
            </button>)}
           
            </div>
        )
    }
    export default TweetEditorAction