import React from 'react';
// Composant qui gere l'entre du tweet de l'utilisateur
function TweetEditorInput(){
  return (
    < >
      <input className="h-[60px] w-full border-none outline-none text-xl bg-black text-white resize-none pt-[10px] marg my-0" type="text" placeholder="What's happining"></input>
    </>
  )
}
export default TweetEditorInput