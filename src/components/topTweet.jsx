import TopTweet from "../icones/icones/Timeline-Prop.png"
// Composant qui gere le btn TopTweet dans Header
function TopTweets(){
    return (
        <button>
            <img className="top-tweet" src={TopTweet} alt="" />
        </button>
        )
}
export default TopTweets