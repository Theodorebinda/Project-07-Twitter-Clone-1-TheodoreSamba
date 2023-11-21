import avatar from "../images/profile-photo.png"

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
    <>
      <div className="tweet-editor-form"></div>
      <Profile />
    </>

  )
}


function TweetteEditor(){
    return (
        <>
          <div className="tweet-editor"></div>
          <TweetEditForm />
        </>
    )
}

export default TweetteEditor