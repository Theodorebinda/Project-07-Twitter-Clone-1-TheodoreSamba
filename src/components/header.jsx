import PageTitle from "../components/pageTitre"
import TopTweet from "../icones/icones/Timeline-Prop.png"

// composant qui gere le Header
function Header() {
  return (
    <header className="header">
      <PageTitle />
      <img className="top-tweet" src={TopTweet} alt="" />
    </header>
  )
}

export default Header
