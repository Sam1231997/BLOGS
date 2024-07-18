



const Bloglist =({title, blogs})  => {
  
  
 return(
    <div className="all">
      <h1>{title}</h1>

        {blogs.map((blog)=>(
        <div className="blog-preview" key ={blogs.id}>
         <h2>{blog.title}</h2>
         <p>{blog.author}</p>
        
         </div>
       ))} 
        
        
        </div>
    )
}
export default Bloglist;