import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const WithAuth = ({ children }) => {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        // Verifica si hay una cookie llamada "user" solo si estamos en el lado del cliente
        if (typeof window !== "undefined") {
            const hasUserCookie = document.cookie.includes("user");
            console.log("se está ejecutando");

            // Si no hay una cookie, establece shouldRedirect en true
            if (!hasUserCookie) {
                console.log('no está logueado');
                setShouldRedirect(true);
            }
        }
    }, []);

    // Renderiza los componentes hijos si el usuario está autenticado,
    // de lo contrario, redirige a la página de inicio
    return shouldRedirect ? <Navigate to="/" /> : <>{children}</>;
};

export default WithAuth;
