import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Conocenospage } from './pages';
import { Usuario } from './pages';


const App = () =>{
    return(
      //desde el navegador
      <BrowserRouter>
      {/*vamos a tener distintas rutas*/}
      <Routes>
            {/* Especificamos cada ruta */}
        <Route path='/' element={<Homepage/>} />
        <Route path='/Registro' element={<Usuario/>}/>
        <Route path='/Conocenos' element={<Conocenospage/>} />
      
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default App;