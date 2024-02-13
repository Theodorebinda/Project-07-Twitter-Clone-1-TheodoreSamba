import PageTitle from "../components/pageTitre";
import TopTweet from "../icones/icones/Timeline-Prop.png";

// composant qui gere le Header
function Header() {
  return (
    <header className="flex py-6 px-4 items-center justify-between border-solid border-b-[1px] border-b-gray-700">
      <PageTitle />
      <button className="bg-transparent border-none text-white">
        <img className="w-6" src={TopTweet} alt="" />
      </button>
    </header>
  );
}

export default Header;
