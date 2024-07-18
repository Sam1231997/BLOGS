const Validation =()=>{
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    return(
        <>
        <form >
            <div>
            <label >Username:</label>
            <input 
            type="text" 
            name="username"
            placeholder="username"
           autoComplete ='off'
           onChange={handlechange} />
            </div>
            <div>
            <label >Email:</label>
            <input 
            type="email" 
            name="email"
            placeholder="example@gmail.com"
           autoComplete ='off' />
            </div>
            <div>
            <label >Password:</label>
            <input 
            type="password" 
            name="password"
            placeholder="*******"
            />
            </div>
            <div>
            <label >Confirm Password:</label>
            <input 
            type="password" 
            name="confirmPassword"
            placeholder="********"
            />
            <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}
export default Validation;