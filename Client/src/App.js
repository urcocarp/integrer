import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Forms from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';



const email= 'nik_186@hotmail.com';
const password='123asd';






function App() {
   const location = useLocation();
   const navigate=useNavigate();
const [characters, setCharacters]=useState([]);
const[access, setAcces]=useState(false);

const login=(userData)=>{
   if(userData.email===email|| userData.password===password){
      setAcces(true)
      navigate('/home')
   }
};

   useEffect(()=>{
      !access && navigate('/')
   },[access])
const onSearch=(id) =>{
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose= (id) =>{
   const characterFiltered= characters.filter(character=>
      character.id!==Number(id))
      setCharacters(characterFiltered)

}

   return (
      <div className='App'>
         {
            location.pathname !== '/'&&<Nav onSearch={onSearch} access={access} setAcces={setAcces}/>
         }
    
            
            
         <h1 className='titulo'>rickandmortyapp</h1>
         <Routes>
            <Route path='/' element={<Forms login={login}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
            <Route path='/Favorites' element={<Favorites/>}/>
      
         </Routes>
      
      </div>
  );
}

        

export default App;
