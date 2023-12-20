import { PiGearLight } from "react-icons/pi";
import trends from "../utiles/Trends"
import FollowingLabel from "./followingLabel"
import { IoIosSearch } from "react-icons/io";

const navTrends = trends.map((trend) => (
    <div className="trend-content">
        <ul className="trend-item">
            <li className=" sidebar-title-details" >{trend.contryTrend}</li>
            <li className="squid">{trend.exploreTrend}</li>
            <li className="sidebar-title-details">{trend.tweetTrend}</li>
        </ul>
        <span>...</span>
    </div>
))
function Trend(){
    
    return (
        <div className="trend">
            <div >
                <form action="" className="search-contenair">
                    <span className="icone-search">
                        <IoIosSearch />
                    </span>
                    <input  className="search" type="search" placeholder="Search Twitter"/>
                </form>
                
            </div>
            <div className="trend-outer-contenair">
            <div  className="trend-contenair">
                <div className="trend-title-content">
                    <p className="trend-title">Trends For You </p><PiGearLight />
                </div>
                <div>
                    {navTrends}
                </div>
                <div className="link-more">
                    <a href="#">Show More</a>
                </div>
            </div>
            <div className="follow-contenair">
                <FollowingLabel />
            </div>
            </div>
        </div>
    )
}

export default Trend