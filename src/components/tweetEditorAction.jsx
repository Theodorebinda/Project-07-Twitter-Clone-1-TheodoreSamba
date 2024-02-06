import React from "react";
import butonMetas from "../utiles/butonMetas";
// Composant qui gere les btns d'action dans l'editeur de tweet

function TweetEditorAction() {
  return (
    <div className="flex items-center content-start gap-4">
      {butonMetas.map((butonMeta, index) => <button  className="bg-transparent border-none" key={index} >
        <img src={butonMeta} alt="" />
      </button>)}

    </div>
  )
}
export default TweetEditorAction
