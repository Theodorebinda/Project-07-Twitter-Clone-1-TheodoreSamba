import React, { useContext } from "react";
import { Consumer } from "./Consumer";
import { useForm } from "react-hook-form";
import TweetEditorButton from "./Tweet-editor-button";
// Composant qui gere l'entre du tweet de l'utilisateur
function TweetEditorInput() {
  const { dataValue } = useContext(Consumer);
  const { addTweet } = useContext(Consumer);
  const { dataUsers } = useContext(Consumer);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const oneUser = dataUsers?.find((user) => {
    return user.isLogin === true;
  });
  const handelCreateTweet = (data) => {
    const createTweet = {
      tweetId: dataValue.length + 1,
      userId: oneUser.id,
      times: new Date().toISOString(),
      text: data.text,
      image: data.image,
      actions: {
        nbreComment: 0,
        nbreRetweet: 0,
        nbreReaction: 0,
      },
    };
    addTweet(createTweet);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          handelCreateTweet(data);
        })}
      >
        <input
          {...register("text")}
          className="h-[60px] w-full border-none outline-none text-xl bg-black text-white resize-none pt-[10px] marg my-0"
          type="text"
          placeholder="What's happining"
        ></input>
        <TweetEditorButton />
      </form>
    </>
  );
}
export default TweetEditorInput;
