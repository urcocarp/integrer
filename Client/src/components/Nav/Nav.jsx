import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";

const Nav=({onSearch, access, setAcces})=>{
       const navigate= useNavigate();
       const handlelogOut=()=>{
        setAcces(false);
        navigate('/')
       }
  
    return(
        <nav className={style.nav}>

          <button className={style.Favorites}>
            <Link to='./Favorites'>Favorites</Link>
          </button>
        
         <button className={style.home}>
           <Link to='./home'>Home</Link>
         </button>
         <button className={style.about}>
           <Link to='./About'>About</Link>
         </button>
         <button onClick={handlelogOut} className={style.out}>
         Log out</button>
         <SearchBar  onSearch={onSearch}className={style.search}/>
    
     </nav>
    )
}

export default Nav;