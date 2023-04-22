import Header from "../Header/Header";
// import Post from "../Posts/Post";
import Posts from "../Posts/Posts";

const Main = () => {

    // Main is only rendered here because Header is added to each page manually due to a logged in & non logged in user.
    return(
        <div className="main-page">
         
            <div>
                <Posts/>
            </div>
        </div>
    )
}

export default Main;