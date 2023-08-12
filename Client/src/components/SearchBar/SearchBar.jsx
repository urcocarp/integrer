import { useState } from "react";
import style from "./Search.module.css";


export default function SearchBar({onSearch}) {
   
   const [id, setId]= useState ('');
      const handleChange =(event)=>{
         
         setId(event.target.value)
         
      }

   return (
      <div className={style.Search}>
         <input type='search' onChange={handleChange} value={id}className={style.imput} />
         <button onClick={()=>onSearch(id)}className={style.agregar}>Agregar</button>
      </div>
   );
}



