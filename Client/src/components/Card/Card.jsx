import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import style from "./Card.module.css";
import { useState, useEffect } from "react";


 function Card({id,name,origin,image,onClose, addFav, removeFav, myFavorites}) {
   const[isFav, setIsFav]= useState(false)

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true)
         addFav({id,name,origin,image,onClose})
      }
    }
    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]); 

   return (
      <div className={style.container}>
         
       rick and morty
                  
         <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
         {
   isFav ? (
      <button onClick={handleFavorite}className={style.fav}>❤️</button>
   ) : (
      <button onClick={handleFavorite}className={style.fav}>🤍</button>
   )
}
         <img src={image} alt=''className={style.image}/>
         
         <Link to={`/Detail/${id}`}>
         <h2>{name}</h2>
         </Link>

         <h2>{origin}</h2>
      </div>
   );
}
const mapStateToProps=(state)=>{
     return{
   myFavorites: state.myFavorites
   }
}

const mapDispatchToProps=(dispatch)=>{
   return {
      addFav:(characters)=>{dispatch(addFav(characters))},
      removeFav:(id)=>{dispatch(removeFav(id))}
   }
}
 



export default connect(mapStateToProps, mapDispatchToProps )(Card)