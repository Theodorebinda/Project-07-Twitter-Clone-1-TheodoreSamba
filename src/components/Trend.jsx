import { RiLock2Fill } from "react-icons/ri"
import trends from "../utiles/Trends"

function Trend(){
    const navTrends = trends.map((trend) => (
        <ul>
            <li>{trend.contryTrend}</li>
            <li>{trend.exploreTrend}</li>
            <li>{trend.tweetTrend}</li>
        </ul>
    ))
    return (
        <div>
            <div className="tread-contenair">
                <input className="tread-search" type="search" placeholder="Search Twitter"/>
            </div>
            <div >
                <p>Trends For You </p>< RiLock2Fill />
            </div>
            <div>
                {navTrends}
            </div>
        </div>
    )
}

export default Trend