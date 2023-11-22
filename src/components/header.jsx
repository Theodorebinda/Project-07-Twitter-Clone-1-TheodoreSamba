import TopTweet from "../icones/icones/Timeline-Prop.png"

function PageTitle() {
    return (
        <h1  className= "page-title">Home</h1>
    )
}

function TopTweets(){
    return (
        <img className="top-tweet" src={TopTweet} alt="" />
        )
}

function Header(){
    return (
            <header  className= "header">
                <PageTitle />
                <TopTweets />
            </header>
    )
}

export default Header