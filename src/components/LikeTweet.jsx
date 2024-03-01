import React, { useContext } from "react";
import { Consumer } from "./Consumer";
import { IoHeartOutline } from "react-icons/io5";

export default function LikeTweet({ number, isLikeTweet, id }) {
  const { toggleLike } = useContext(Consumer);

  const handelClick = () => {
    toggleLike(id);
  };

  return (
    <button
      className="button-tranparent flex items-center text-gray-500 cursor-pointer transition-all rounded-full action-hover-red"
      onClick={handelClick}
    >
      <span className="hover:bg-red-300 opacity-50 w-[30px] h-[30px] flex justify-center items-center rounded-full">
        <IoHeartOutline />
      </span>
      {isLikeTweet ? (
        <div className="pl-[5px] text-orange-600">{number}</div>
      ) : (
        <div className="pl-[5px]">{number}</div>
      )}
    </button>
  );
}
