import SidebarTop from "../components/SidbarTop";
import SidbarBottom from "../components/sidebarBottom";




function Sidebar(){
    return (
        <div className="sidebar">
           <SidebarTop/>
           <SidbarBottom />
        </div>
    )
}

export default Sidebar