import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarComponent, PrincipalComponent, FooterComponent, DropdownComponent } from "../components";

const Homepage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Usuario",{}, [navigate]))
    return(
        <div>
            

        </div>
    )
}

export default Homepage;
