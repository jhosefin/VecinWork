import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Mapa, NavbarComponent, FooterComponent} from "../components";

const Ubicacion = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("",{}, [navigate]))
    return(
        <div>
            <NavbarComponent/>
            <Mapa/>
            <FooterComponent/>
            

        </div>
    )
}

export default Ubicacion;
