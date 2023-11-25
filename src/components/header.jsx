import TopTweets from "../components/topTweet"
import PageTitle from "../components/pageTitre"

function Header(){
    return (
            <header  className= "header">
                <PageTitle />
                <TopTweets />
            </header>
    )
}

export default Header