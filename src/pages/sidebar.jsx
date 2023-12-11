import SidebarTop from "../components/SidbarTop";
import SidbarBottom from "../components/sidebarBottom";




function Sidebar(){
    return (
        <div className="contenair-sidebar">
            <div className="sidebar">
           <SidebarTop/>
           <SidbarBottom />
           </div>
        </div>
    )
}

export default Sidebar