import React from "react";
import tweets from "../utiles/tweet";
import { Consumer } from "./Consumer";

function AddTweet (){

    const [tweet, setTweet] = useState(Consumer); 
            const [inputValue, setInputValue] = useState('');

            const handleInputAdd = (e) => {
                setInputValue(e.target.value);
            };

            const handleAddTweet = () => {
                if (inputValue.trim() !== '') {
                    setTweet((prevTweet) => [...prevTweet, inputValue]);
                    setInputValue('');
                }
            };

    return(
        <>

        </>
    )
}