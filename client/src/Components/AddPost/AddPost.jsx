import { useState,useEffect } from "react";
import post from "../../Utils/posts";
import "./Addpost.css"
import Login from "../Login/Login";
// import { MMKVLoader } from "react-native-mmkv-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from "react-router-dom";



// const MMKV = new MMKVLoader().initialize();
const AddPost = () =>{
    const navigate = useNavigate();
    const poststring = JSON.stringify(post);
    const [postlist, setPostlist]= useState(()=>{
        if(!localStorage.getItem("newpost"))
            return post;
        else
            return JSON.parse(localStorage.getItem("newpost"));
        });

 
    // new issue postlist data is lost at refresh & initialized again with the 2 default postlist- this is not resolved 

    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [card, setCard] = useState();
    const [newPost, setNewPost] = useState({
            name:name,
            text:text,
            upvote:0,
            downvote:0
            })
   
    console.log("post");
    console.log(post);
    console.log("postlist");
    console.log(postlist);

// ==============Trying USEEFFECT [this works ]============

useEffect(()=>{
    console.log(postlist);

    if(localStorage.getItem("user")){
    localStorage.setItem("newpost", JSON.stringify(postlist));
    }

},[card])


const handleChange = (e)=>{
    const{name, value}= e.target;
    setNewPost({...newPost, [name]: value});           
}

const onSubmitHandler = async (e)=> { 
        e.preventDefault();
        setPostlist([...postlist,newPost]);
        setCard(newPost);
        alert("Post created");
        setTimeout(()=>{
        navigate('/posts')
    },1)

       
}


    // ==================TRYING USING CALLBACK ===============================
    
    // function setlist(postlist){
    //     setPostlist([...postlist,newPost]);
    //     storedata(postlist);
    // }

    // function storedata(postlist){
    //     localStorage.setItem("newpost", JSON.stringify(postlist));

    // }
    // const handleChange = (e)=>{
    //     const{name, value}= e.target;
    //     setNewPost({...newPost, [name]: value});           
    // }

    // const onSubmitHandler = async(e)=> { 
    //     e.preventDefault();
    //     setlist(postlist);         
    //     console.log("newpost");
    //     console.log(newPost);       
    //     navigate('/posts');                   
    //    };

// ==================TRYING USING PROMISE ==========================================
//     const handleChange = (e)=>{
//         const{name, value}= e.target;
//         setNewPost({...newPost, [name]: value});           
//     }

//     const onSubmitHandler = async (e)=> { 
//             e.preventDefault();

//     let newpostlist = await new Promise((resolve, reject) => {
//         try {
//             setPostlist([...postlist,newPost]);
//             return postlist;
//             }catch(e){
//                 console.log(e);
//             }
//                 });
//     let posts = await newpostlist;
//     let array1 = await new Promise((resolve, reject) => {
//         try{
//             console.log("setting storage ");

//         }catch(e){
//             console.log(e);
//         }
//        });
//     let storagedata = await array1;
//     localStorage.setItem("newpost", JSON.stringify(posts));
// }



// =====================TRYING WITHOUT PROMISE ====================================================
   
           //    let setpost= new Promise((resolve, reject) => {
    //     setNewPost({...newPost, [name]: value});
    //   });
    //   console.log(setpost)
    //    let  set2post = await setpost;
        // console.log(set2post);

        // let newpostlist = await setPostlist([...postlist,newPost]);
        // console.log(newpostlist);
        // let finalpost = await newpostlist;

        // setPostlist([...postlist,newPost]);
        
        
        // console.log("newpost updated")        
        // alert('post submitted successfully');
        // localStorage.setItem("newpost", JSON.stringify(postlist));        

   
 


  
    return(
        <div>
            {(!localStorage.getItem("user"))?<><Login /></>:
            <div>
                <form action="" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="name" placeholder="enter the name"  onChange={handleChange}/>
                    </div>
                    <div className="input2">
                        <label htmlFor="post">What's in your mind ??</label><br />
                        <input type="text" name="text" placeholder="Write something"onChange={handleChange}/>

                    </div>
                    <div>
                        <center><button type="submit">Post</button></center>
                    </div>
                    
                </form>
            </div>}
        </div>
    )
}

export default AddPost;
