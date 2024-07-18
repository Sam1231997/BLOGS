
import React, {useState, useEffect} from "react";
 
 

import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home =() =>{

const { data: blogs, isPending, error}= useFetch("http://localhost:4000/blogs");




// const handleDelete =(id) =>{
// const newBlogs =blogs.filter(blog => blog.id !== id)
// setBlogs(newBlogs);
// }


    return(
        
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div style={{width: "100px", height: "70px", color: "white", backgroundColor: "green"}}> Loading ..... </div>}
        {blogs && <Bloglist blogs= {blogs} title="All blogs"/>}
    
        </div>
        
        
    )
}
export default Home;