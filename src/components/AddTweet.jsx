import React from "react";
import tweets from "../utiles/tweet";

function AddTweet (){

    const [tweet, setTweet] = useState(tweets); 
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