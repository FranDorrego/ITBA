import React, { useState } from 'react'
import { contextUser } from './contextUser';

export default function State({children}) {
  
    const [user, setUser] = useState('User default')
    
    const aplicarNombre = (nombre) =>{
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
