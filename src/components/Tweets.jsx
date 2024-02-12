import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Consumer";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";

// import TweetAction from "./tweetAction";

function Tweets() {
  const {dataValue} =useContext(Consumer)
  const {dataUsers} =useContext(Consumer)
  const [nbreComment, setNbreComment] = useState(0);

  const handleClick = (e) => {
   
    if(nbreComment==0){
      setNbreComment(nbreComment + 1);
    }else if (nbreComment==1){
      setNbreComment(nbreComment - 1);

    }
  }
  function getTweetAuthor (userId) {
  const user = dataUsers?.find(user => user.id === userId);
    return user
  }
  // console.log(user);
// console.log(context.dataValue.users);
  const tweetsElement = dataValue?.map((tweet, index) => (
    
    tweet.text.trim() !=="" && tweet.image !== false?(
    <div key={index} className="flex justify-start items-start gap-[20px] py-6 px-4 border-solid border-b-[1px] border-b-gray-700 ">
      <Link to={`/profil/${getTweetAuthor(tweet.userId).autorDetails}`} className="h-[70px] flex-auto w-[70px]">
        <img className="max-w-full max-h-full rounded-full" src={getTweetAuthor(tweet.userId).tweetAvatar} alt="" />
      </Link>
      <div className="flex flex-col items-start justify-start gap-[30px] w-full  ">
        <div className="flex flex-col ">
          <Link to={`/profil/${getTweetAuthor(tweet.userId).autorDetails}`} className="flex justify-start items-start gap-[10px] text-base">
            <h4 ><span className="text-base text no-underline text-white" href="#">{getTweetAuthor(tweet.userId).author}</span></h4>
            <img  src={getTweetAuthor(tweet.userId).isCertified ? getTweetAuthor(tweet.userId).isCertified : null} alt="" />
            <p ><span className="text-gray-600 no-underline" href="#" >{getTweetAuthor(tweet.userId).autorDetails}{tweet.times}</span></p>
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
                <span className="hover:bg-blue-300 opacity-50 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                 <FaRegComment /> 
                </span>
                <div className="pl-[5px]">
                  {tweet.actions.nbreComment}
                </div>
              </button>
              <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-gren" onClick={() => {handleClick()}}>
                <span className="hover:bg-green-300 opacity-50 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                <FaRetweet />
                </span>
                <div className="pl-[5px]">
                   {nbreComment}
                </div>
              </button>
              <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-red" onClick={() => {handleClick()}}>
                <span className="hover:bg-red-300 opacity-50 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                 <IoHeartOutline />
                </span>
                <div className="pl-[5px]">
                {nbreComment}
                </div>
              </button>
              <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-blue" >
                <span className="hover:bg-blue-300 opacity-50 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                <FiShare />
                </span>
              </button>
          </div>
          
          </div>
        </div>
      </div>) : null
  ));
  return (
    <>
      {tweetsElement}
    </>
  )
}
export default Tweets
