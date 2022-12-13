import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PrincipalComponent } from "../components";

const Homepage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Usuario",{}, [navigate]))
    return(
        <div>
            <PrincipalComponent/>
        </div>
    )
}

export default Homepage;