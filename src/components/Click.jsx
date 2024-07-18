
import React,{useState} from"react"; 

const Click = () =>{
    const [name, Setname] = useState("James Michael");
    


    
    
    const handle = () =>{
        Setname("Monday Oloche"); 
    }
    

    return(
        <>
        <div>
           <p>Name: {name}</p>
           <button onClick={handle}>Change</button>
        </div>
        </>
    )
}
export default Click;