import React from "react";
import { IngresoUsuario, NavbarComponent, FooterComponent } from "../components";
import MisDatos from "../components/MisDatos";
import NavMisDatos from "../components/NavMisDatos";
import Publicar from "../components/Publicar";
import Direcciones from "../components/Direcciones";
import EliminarCuenta from "../components/EliminarCuenta";
import Contraseña from "../components/Contraseña";

const InicioSesionPage = () => {

    return (
        <div>
        <NavbarComponent/>
        {/*<IngresoUsuario/>*/}
        {/*<NavMisDatos/>*/}
        {/*<MisDatos/>*/}
        <Publicar/>
        {/*<Direcciones/>*/}
        {/*<EliminarCuenta/>*/}
        {/*<Contraseña/>*/}
        <FooterComponent/>

     
        </div>
    )
}

export default InicioSesionPage;