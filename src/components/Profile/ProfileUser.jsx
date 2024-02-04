import { useContext, useState } from "react";
import users from "../../utiles/tweet";
import { Consumer } from "../Consumer";
import ProfileHeaderType from "./ProfilHeaderType";
import { Link } from "react-router-dom";


function ProfileUser() {
  const context =useContext(Consumer);
  const [nbreComment, setNbreComment] = useState(0);
  const profilUser = users.find(user => user.isLogin == true)
  const handleClick = (event) => {
    // console.log(event.target);
    if(nbreComment==0){
      setNbreComment(nbreComment + 1);
    }else{
      setNbreComment(nbreComment - 1);

    }
  }


  const mesTweets = context.dataValue.filter((userTweet) => userTweet.author == "Bradley Ortiz"
  

  ).map((tweet, index) => (
    <div key={index} className="flex justify-start items-start gap-[20px] py-6 px-4 border-solid border-b-[1px] border-b-gray-700 ">
      <Link to={`/profil/${tweet.author}`} className="h-[70px] flex-auto w-[70px]">
        <img className="max-w-full max-h-full rounded-full" src={tweet.tweetAvatar} alt="" />
      </Link>
      <div className="flex flex-col items-start justify-start gap-[30px] w-full  ">
        <div className="flex flex-col ">
          <Link to={`/profil/${tweet.author}`} className="flex justify-start items-start gap-[10px] text-base">
            <h4 ><span className="text-base text no-underline text-white" href="#">{tweet.author}</span></h4>
            <img  src={tweet.isCertified ? tweet.isCertified : null} alt="" />
            <p ><span className="text-gray-600 no-underline" href="#" >{tweet.autorDetails}{tweet.times}</span></p>
          </Link>
          <div className="text-slate-300 text-base">
            <p >{tweet.text}</p>
          </div>
          <div className="w-full px-0 pb-2 pt-1 ">
            <Link to={tweet.image} target="_blank"><img className="max-w-full h-auto  rounded-[50px]" src={tweet.image ? tweet.image : null} alt="" /></Link>
          </div>
          {/* TweetActions */}
          <div className="flex justify-center items-center gap-[5rem] text-base ">
              <button className="bg-transparent border-none flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-blue">
                <img className="action-hover-blue w-4 h-auto text-gray-700" alt="" src={tweet.actions.labelComment} />
                <div className="pl-[5px]">
                  {tweet.actions.nbreComment}
                </div>
              </button>
              <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-gren" onClick={() => {handleClick(e)}}>
                <img className="action-hover-blue w-4 h-auto text-gray-700" alt="" src={tweet.actions.labelRetweet} />
                <div className="pl-[5px]">
                   {nbreComment}

                </div>
              </button>
              <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-red" onClick={() => {handleClick()}}>
                <img className="action-hover-blue w-4 h-auto text-gray-700" alt="" src={tweet.actions.labelReaction} />
                <div className="pl-[5px]">
                {nbreComment}
                </div>
              </button>
              <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-blue" onClick={() => {handleClick()}}>
                <img className="action-hover-blue w-5 h-auto text-gray-700" alt="" src={tweet.actions.labelShare} />
              </button>
          </div>
          
          </div>
        </div>
      </div>
  ));
  // console.log(mesTweets);
    return(
        <>
            <div className="profile-hero">
            <ProfileHeaderType name={profilUser.name} nbrsPostes={profilUser.nbrsPostes}/>
                <div className="profile-cover">
                <img src={profilUser.couvertureImage} alt="" />
                </div>
                <div className="profile-hero-content">
                <div className="phc-row-1">
                    <div className="phc-c1">
                    <a href="#">
                        <img
                        src={profilUser.tweetAvatar}
                        alt=""
                        className="profile-avatar"
                        />
                    </a>
                    <h1 className="name">{profilUser.author}</h1>
                    <p className="profile-username">{profilUser.autorDetails}</p>
                    </div>
                    <div className="phc-c2">
                    {profilUser ?<a href="#" className="profile-edit-button hover-gray">
                        Profile editor
                    </a>: <a href="#" className="profile-edit-button hover-gray">
                        Follow
                    </a> }
                    </div>
                </div>
                <div className="phc-row-2">
                    <div className="profile-description">
                    <p>{profilUser.description}</p>
                    </div>
                    <div className="profile-infos">
                    </div>
                    <div className="profile-others">
                    <a href="#" className="profile-other">
                        {profilUser.abonnement}
                        <span className="text">abonnements</span>
                    </a>
                    <a href="#" className="profile-other">
                        {profilUser.abonne}
                        <span className="text">abonnés</span>
                    </a>
                    </div>
                </div>
                </div>

                {mesTweets}
            </div>
            </>
        );
}
export default ProfileUser