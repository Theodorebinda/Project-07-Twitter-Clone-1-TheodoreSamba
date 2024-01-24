import React, { useContext } from 'react';
import { Consumer } from './Consumer';
// Composant qui gere l'entre du tweet de l'utilisateur
function TweetEditorInput(){
  const {dataValue, inputValue, setInputValue} = useContext(Consumer)
  console.log(dataValue);
  // console.log(inputValue);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
};

  return (
    < >
      <input className="h-[60px] w-full border-none outline-none text-xl bg-black text-white resize-none pt-[10px] marg my-0" value={inputValue} type="text" placeholder="What's happining"  onChange={handleInputChange}></input>
    </>
  )
}
export default TweetEditorInput