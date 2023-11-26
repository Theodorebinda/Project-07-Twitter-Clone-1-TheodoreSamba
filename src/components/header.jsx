import TopTweets from "../components/topTweet"
import PageTitle from "../components/pageTitre"
// composant qui gere le Header
function Header(){
    return (
            <header  className= "header">
                <PageTitle />
                <TopTweets />
            </header>
    )
}

export default Header