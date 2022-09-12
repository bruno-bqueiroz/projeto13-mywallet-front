import GlobalStyle from "../style/globalStyles";
import UserContext from '../context/UserContext'; 
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Cadastro from "./Cadastro";
import Registros from "./Registros";
import Entrada from "./Entrada";
import Saida from "./Saida";

export default function App() {
  const [token, setToken] = useState([]);
  return(
   <>
      <GlobalStyle/>
      <UserContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Login />}/>
            <Route path='/cadastro' element = {<Cadastro  />}/>
            <Route path='/registros' element = {<Registros  />}/>
            <Route path='/entrada' element = {<Entrada  />}/>
            <Route path='/saida' element = {<Saida  />}/>
          </Routes>
        </BrowserRouter>      
      </UserContext.Provider>  
   </>
  );
}