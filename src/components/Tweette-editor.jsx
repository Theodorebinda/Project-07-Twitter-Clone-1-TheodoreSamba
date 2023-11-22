import avatar from "../images/profile-photo.png";
import TweetEditorInput from "../components/Tweet-editor-input";
import TweetEditorButton from "../components/Tweet-editor-button"

let user ={
  name : "Bradley Ortiz",
  userName : "@bradley",
  userImage : avatar,
}

function Profile(){
  return (
    <>
      <img 
        className="avatar"
        src={user.userImage}
        />
    </>
  )
}


function TweetEditForm(){
  return(
      <div className="tweet-editor-form">
         <TweetEditorInput />
         <TweetEditorButton />
      </div>
      


  )
}


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