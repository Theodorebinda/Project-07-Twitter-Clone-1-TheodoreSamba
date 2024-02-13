import TweetEditorInput from "../components/Tweet-editor-input";

// Composant qui prend en compte les entrees du tweet et les bts d'action d'utilasateur
function TweetEditForm() {
  return (
    <div className="flex-auto">
      <TweetEditorInput />
    </div>
  );
}
export default TweetEditForm;
