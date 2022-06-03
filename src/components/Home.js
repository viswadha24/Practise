import './Home.css'
import image from "./images/logo.jpg";
const Home=()=>{
    return(
        
        <div className="home" style={{backgroundImage:`url(${image})`}} >
            <div>Hi</div>
        </div>
    )
}
export default Home;