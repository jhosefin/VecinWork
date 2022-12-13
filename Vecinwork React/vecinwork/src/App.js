import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Conocenospage } from './pages';

const App = () =>{
    return(
      //desde el navegador
      <BrowserRouter>
      {/*vamos a tener distintas rutas*/}
      <Routes>
            {/* Especificamos cada ruta */}
        <Route path='/Home' element={<Homepage/>} />
        <Route path='/Conocenos' element={<Conocenospage/>} />
  
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default App;