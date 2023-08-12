import style from "./Forms.module.css"
import { useState, userData } from 'react';
import validation from "../Validation/Validation";

const Forms=({login})=>{
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '' ,
        password:''
    });

    const handleChange = (event)=>{
        setUserData ({
                ...userData,
                [event.target.name]: event.target.value
              
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
              
        }))

    }
  const handleSubmit=(event)=>{
    event.preventDefault();
    login(userData)

  }

    return(
    <form onSubmit={handleSubmit} className={style.Forms}>
        <h1 className={style.welcome}>Welcome!!</h1>
   <label htmlFor="email" className={style.email}>Email:</label>
   <input type="text" name="email" value={userData.email} onChange={handleChange}/>
   {errors.email && <p>{errors.email}</p>}
   
   <label htmlFor="password" className={style.pass}>Password:</label>
   <input type="text" name="password" value={userData.password} onChange={handleChange}/>
    {errors.password && <p>{errors.password}</p>}

     <button className={style.boton}>Submit</button>
    </form>
    )
 }
 export default Forms;