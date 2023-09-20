import { contextUser } from '../../../context/contextUser'
import estilosDashboard from '../../styleDashboard.module.css'
import { useContext } from 'react'


export function Saludo({ usuario, texto, children}){



    return(
        <div className={estilosDashboard.divSaludo}>
            <h1 className={estilosDashboard.saludo}>{texto} {usuario} </h1>
            {children}
        </div>
    )
}