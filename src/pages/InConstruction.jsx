import { Link } from "react-router-dom"

function InConstruction(){
    return(
        
        <>
        <div className="main-404">
          <h1>in construction</h1>
          <p>this page is under construction, our apologies</p>
          <Link to="/" className="hover-white-darkist">
            Go to Home
          </Link>
        </div>
      </>
      
    )
}
export default InConstruction