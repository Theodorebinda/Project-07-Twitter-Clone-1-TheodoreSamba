import { Link, useParams } from "react-router-dom";
import ProfileHeaderType from "./ProfilHeaderType";
import { useContext, useState } from "react";
import { Consumer } from "../Consumer";
import { FiShare } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";


function ProfileFollowers() {
    const {dataValue} =useContext(Consumer);
    const [nbreComment, setNbreComment] = useState(0);
    const {userName} = useParams()
    
    const oneUser = dataValue.users.find(user => {
      return user.autorDetails === userName;
  });
    function getTweetAuthor (userId) {
      const user = dataValue.users.find(user => user.id === userId);
        return user === userName
      }
    
    const mesTweets = dataValue.tweets.filter((userTweet) => userTweet.userId == oneUser.id)
    .map((tweet,index) =>(
        // tweet.text.trim() !== "" && tweet.image !== false(
            <div key={index} className="flex justify-start items-start gap-[20px] py-6 px-4 border-solid border-b-[1px] border-b-gray-700 ">
            <Link to={getTweetAuthor(tweet.userId).autorDetails} className="h-[70px] flex-auto w-[70px]">
              <img className="max-w-full max-h-full rounded-full" src={oneUser.tweetAvatar} alt="" />
            </Link>
            <div className="flex flex-col items-start justify-start gap-[30px] w-full  ">
              <div className="flex flex-col ">
                <Link to={getTweetAuthor(tweet.userId).autorDetails} className="flex justify-start items-start gap-[10px] text-base">
                  <h4 ><span className="text-base text no-underline text-white" href="#">{oneUser.author}</span></h4>
                  <img  src={oneUser.isCertified ? oneUser.isCertified : null} alt="" />
                  <p ><span className="text-gray-600 no-underline" href="#" >{oneUser.autorDetails}{tweet.times}</span></p>
                </Link>
                <div className="text-slate-300 text-base">
                  <p >{tweet.text}</p>
                  <a className="text-blue-500" href={tweet.link} target="_blank" rel="noopener noreferrer">{tweet.link}</a>
                </div>
                <div className="w-full px-0 pb-2 pt-1 ">
                  <Link to={tweet.image} target="_blank"><img className="max-w-full h-auto  rounded-[50px]" src={tweet.image ? tweet.image : null} alt="" /></Link>
                </div>
                {/* TweetActions */}
                <div className="flex justify-center items-center gap-[5rem] text-base ">
                    <button className="bg-transparent border-none flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-blue">
                      <FaRegComment />
                      <div className="pl-[5px]">
                        {tweet.actions.nbreComment}
                      </div>
                    </button>
                    <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-gren" onClick={() => {handleClick(e)}}>
                      <FaRetweet />                      
                    <div className="pl-[5px]">
                         {nbreComment}
                      </div>
                    </button>
                    <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-red" onClick={() => {handleClick()}}>
                     <IoHeartOutline />
                    <div className="pl-[5px]">
                      {nbreComment}
                      </div>
                    </button>
                    <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-blue" onClick={() => {handleClick()}}>
                      <span>
                       <FiShare />
                      </span>
                    </button>
                </div>
                
                </div>
              </div>
            </div>
        // )
    ))
    console.log(mesTweets);
    return(
        <>
            <div className="profile-hero timeline">
            <ProfileHeaderType name={oneUser.author} nbrsPostes={mesTweets.length}/>
                <div className="profile-cover">
                <img src={oneUser.couvertureImage} alt="" />
                </div>
                <div className="profile-hero-content">
                <div className="phc-row-1">
                    <div className="phc-c1">
                    <a href="#">
                        <img
                        src={oneUser.tweetAvatar}
                        alt=""
                        className="profile-avatar"
                        />
                    </a>
                    <h1 className="name">{oneUser.author}</h1>
                    <p className="profile-username">{oneUser.autorDetails}</p>
                    </div>
                    <div className="phc-c2">
                    {oneUser.isLogin?
                    <a href="#" className="profile-edit-button hover-gray">
                        Edite Profil
                    </a> :
                    <a href="#" className="profile-edit-button hover-gray">
                        Follow
                    </a>}
                    </div>
                </div>
                <div className="phc-row-2">
                    <div className="profile-description">
                    <p>{oneUser.description}</p>
                    <span className="flex text-start">
                    <CiShoppingTag /><a className=" text-blue-500" href={oneUser.site}>{oneUser.site}</a>
                    </span>
                    </div>
                    <div className="profile-infos">
                    </div>
                    <div className="profile-others">
                    <a href="#" className="profile-other">
                        {oneUser.abonnement}
                        <span className="text">abonnements</span>
                    </a>
                    <a href="#" className="profile-other">
                        {oneUser.abonne}
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
export default ProfileFollowers