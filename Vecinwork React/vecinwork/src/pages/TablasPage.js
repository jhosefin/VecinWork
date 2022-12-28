import React from "react";

const TablasPage = () => {
    return (
        <div>
            <TablaRegistro usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} />
        </div>
    )
}

export default TablasPage;