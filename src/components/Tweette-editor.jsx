import Profile from "../components/profil";
import TweetEditForm from "../components/tweetEditForm";
// Composant qui gere l'editeur de tweet
function TweetteEditor() {
  return (
    <>
      <div className="flex items-start content-start  p-1 border-b-[1px] border-solide border-gray-700">
        <Profile />
        <TweetEditForm />
      </div>
    </>
  );
}

export default TweetteEditor;
