import { PiGearLight } from "react-icons/pi";
import trends from "../utiles/Trends"
import FollowingLabel from "./followingLabel"

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
            <div className="search-contenair">
                <input className="search" type="search" placeholder="Search Twitter"/>
            </div>
            <div  className="trend-contenair">
                <div className="trend-title">
                    <p>Trends For You </p><PiGearLight />
                </div>
                <div>
                    {navTrends}
                </div>
            </div>
            <div className="follow-contenair">
                <FollowingLabel />
            </div>
        </div>
    )
}

export default Trend