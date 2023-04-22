import { useState } from "react";
import post from "../../Utils/posts";
import Header from "../Header/Header";
import Header1 from "../Header/Header1";
import Post from "./Post";
import { useNavigate } from "react-router-dom";



const Posts = () => {
   
    const navigate = useNavigate();
    // const[cardlist, setCardlist]=useState();

    // getting post list from the local storage - local storage keeps the data unless cleared
    const cards= JSON.parse(localStorage.getItem('newpost'));
    console.log("cards set ");
    console.log(cards);
   

    // console.log(cardlist);


    
    return (
     
            <>
            
        {/* checks if the user login & post data is present  */}
            {(localStorage.getItem("user") && localStorage.getItem("newpost"))? 
            <>
            {/* FEtch from local storage */}
                
            <div>
                    {cards.map((post,index) => {
                        return (<Post 
                            key={post.name}
                            name={post.name} 
                            text={post.text} 
                            upvote={post.upvote} 
                            downvote={post.downvote}
                            
                            />
                            
                            )
                    })}
               

                </div>
            </>
            : 
                       
                <div>    {/* This will only render when there is no login data */}
                    {post.map((post,index) => {
                        return (<Post 
                            key={post.name}
                            name={post.name} 
                            text={post.text} 
                            upvote={post.upvote} 
                            downvote={post.downvote}
                            
                            />
                            
                            )
                    })}             

                </div>

            }
            
        
    </>)
}

export default Posts;


