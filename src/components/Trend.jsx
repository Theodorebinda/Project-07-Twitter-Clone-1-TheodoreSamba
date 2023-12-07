import { RiLock2Fill } from "react-icons/ri"
import trends from "../utiles/Trends"
import FollowingLabel from "./followingLabel"

const navTrends = trends.map((trend) => (
    <div>
        <p>{trend.contryTrend}</p>
        <h4>{trend.exploreTrend}</h4>
        <p>{trend.tweetTrend}</p>
    </div>
))
function Trend(){
    
    return (
        <div className="trend">
            <div className="search-contenair">
                <input className="search" type="search" placeholder="Search Twitter"/>
            </div>
            <div  className="trend-contenair">
                <div >
                    <p>Trends For You </p>< RiLock2Fill />
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