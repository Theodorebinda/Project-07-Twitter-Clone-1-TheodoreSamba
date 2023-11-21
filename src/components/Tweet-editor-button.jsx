import emoji from "../icones/Butons/Icons/Emoji.jpg"
import schedule from "../icones/Butons/Icons/Schedule.jpg"
import poll from "../icones/Butons/Icons/Poll.jpg"
import media from "../icones/Butons/Icons/Media.png"
import group from "../icones/Butons/Icons/Group.png"

function TweetEditorAction(){
    const butonMetas =[emoji,schedule,poll,media,group];
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
       <div className="tweet-editor-buttons">
          <TweetEditorAction />
       </div>
    )
}
export default Buton

