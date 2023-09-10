import React, { useState } from 'react'
import { contextUser } from './contextUser';
import { setNombre, Nombre } from '../Dashboard/components_dashboard/API_Datos_Personales.js'

export default function State({children}) {
    
    const [user, setUser] = useState(Nombre().NombreBase)
    
    const aplicarNombre = (nombre) =>{

        if (nombre !== null){
            setNombre( {"NuevoNombre" : nombre} )
        }

        setUser(nombre);
        console.log("nombre: " + nombre)
    }

    return (
        <contextUser.Provider
        value={{user, aplicarNombre}}
        >
            {children}
        </contextUser.Provider>

  )
}
