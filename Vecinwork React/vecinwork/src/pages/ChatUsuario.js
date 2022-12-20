import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarComponent, ChatComponent, FooterComponent } from "../components";

const ChatUsuariopage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/",{}, [navigate]))
    return(
        <div>
            <NavbarComponent/>
            <ChatComponent/>
            <FooterComponent/>

        </div>
    )
}

export default ChatUsuariopage;