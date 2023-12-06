import TopTweet from "../icones/icones/Timeline-Prop.png"
// Composant qui gere le btn TopTweet dans Header
function TopTweets(){
    return (
        <a href="#">
            <img className="top-tweet" src={TopTweet} alt="" />
        </a>
        
        )
}
export default TopTweets