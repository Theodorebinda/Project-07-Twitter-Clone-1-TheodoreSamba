import Profile from "../components/profil";
import TweetEditForm from "../components/tweetEditForm"
// Composant qui gere l'editeur de tweet
function TweetteEditor(){
    return (
        <>
          <div className="tweet-editor">
          <Profile />
          <TweetEditForm />
          </div>
         
         
        </>
    )
}

export default TweetteEditor