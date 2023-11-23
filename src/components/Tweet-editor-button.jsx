import emoji from "../icones/icones/Emoji.png"
import schedule from "../icones/icones/Schedule.png"
import gif from "../icones/icones/Gif.png"
import poll from "../icones/icones/Poll.png"
import media from "../icones/icones/img.png"

const butonMetas =[media,gif,poll,emoji,schedule];
function TweetEditorAction(){
    
    return (
        <div className="tweet-editor-actions">
        {butonMetas.map((butonMeta) =>  <button>
            <img src={butonMeta} alt="" />
        </button>)}
       
        </div>
    )
}

function Buton(){
    return (
      <>
         <button className="button">Tweet
         </button>
      </>
    )
    
}

function TweetEditorButton(){
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorAction />
      <Buton />
    </div>
  )
}
export default TweetEditorButton

