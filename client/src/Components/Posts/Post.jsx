import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import post from "../../Utils/posts";
import "./post.css";
import AddPost from "../AddPost/AddPost";


const Post = ({name,text,upvote,downvote}) => {

    const navigate= useNavigate();

   
// no changes have been made I guess in this file this file only works as template or core code for the posts.
  //I would also recommend to stop using table for showing posts/feeds as in reddit.
      
    const [post, setPost] = useState({
        name: "",
        text: '',
        upvote: 0,
        downvote: 0,
        
    })
    
    useEffect(() => {

        setPost({
            name: name,
            text: text,
            upvote:upvote,
            downvote:downvote
        })
      
      },[]);

    const onLoginHandler = ()=>{
        navigate("/Login");
    }

  

    const onClickHandler= (e) =>{
        if(localStorage.getItem("user")){
               if(e.target.name==='upvote'){
            console.log('upvote clicked');
            let upvote = post.upvote+1;
            setPost(prev=>{
                return{
                    ...prev, upvote:upvote,
                }
            })
            

        }
        else{
            console.log('downvote clicked');
            let downvote = post.downvote-1;
            setPost(prev=>{
                return{
                    ...prev, downvote:downvote,
                }
            })

            
        }
    }else alert("Please Login");

  

    }




    return (

  
        <>
            <div className="container">
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                    <th>Upvotes</th>
                    <th>DownVotes</th>
                </tr>
            </thead>
            <tbody>
                <tr key={post.name}>
                    <td><h2>{post.name}</h2></td>
                    <td><p>{post.text}</p></td>
                    <td><button name="upvote" onClick={onClickHandler}>⇧{post.upvote}</button></td>
                    <td><button name="downvote" onClick={onClickHandler}>⇩{post.downvote}</button></td>
                    
                </tr>
           
            </tbody>
        </table></div>
        </>
 
           
            
    )
};

export default Post;