import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Conocenospage, ChatUsuariopage, CategoriasDestacadasPage, PublicacionPage, Usuario, InicioSesionPage,PerfilPage} from './pages';

const App = () =>{
    return(
      //desde el navegador
      <BrowserRouter>
      {/*vamos a tener distintas rutas*/}
      <Routes>
            {/* Especificamos cada ruta */}
        <Route path='/' element={<Homepage/>} />
        <Route path='/Conocenos' element={<Conocenospage/>} />
        <Route path='/Chat' element={<ChatUsuariopage/>} />
        <Route path='/Destacados' element={<CategoriasDestacadasPage/>} />
        <Route path='/Publicacion' element={<PublicacionPage/>} />
        <Route path='/Registro' element={<Usuario/>}/>
        <Route path='/Iniciar-Sesion' element={<InicioSesionPage/>}/>
        <Route path='/Perfil' element={<PerfilPage/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default App;