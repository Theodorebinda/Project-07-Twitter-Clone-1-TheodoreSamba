import React from "react";
import butonMetas from "../utiles/butonMetas";
// Composant qui gere les btns d'action dans l'editeur de tweet

function TweetEditorAction() {
  return (
    <div className="tweet-editor-actions">
      {butonMetas.map((butonMeta) => <button >
        <img src={butonMeta} alt="" />
      </button>)}

    </div>
  )
}
export default TweetEditorAction
