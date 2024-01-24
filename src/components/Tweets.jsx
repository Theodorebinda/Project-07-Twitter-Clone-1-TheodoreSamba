import React, { useContext, useState } from "react";
import tweets from "../utiles/tweet"
import { Link } from "react-router-dom";
import { Consumer } from "./Consumer";
// import TweetAction from "./tweetAction";

function Tweets() {
  const context =useContext(Consumer)
  const [nbreComment, setNbreComment] = useState(0);

  const handleClick = (e) => {
    e.currentTarget
    console.log(e.currentTarget);
    if(nbreComment==0){
      setNbreComment(nbreComment + 1);
    }else{
      setNbreComment(nbreComment - 1);

    }
  }

  const tweetsElement = context.dataValue.map((tweet, index) => (
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
              <button className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-gren" onClick={() => {handleClick()}}>
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
  return (
    <>
      {tweetsElement}
    </>
  )
}
export default Tweets
