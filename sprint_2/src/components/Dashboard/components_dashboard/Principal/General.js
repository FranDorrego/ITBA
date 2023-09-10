import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'
import { Buscador } from './Buscador';
import { ContenedorPrincipal } from './ContenedorPrincipal';
import { Saludo } from './Saludo';
import { Movimientos } from './Movimientos';
import { TrajetasSaludo } from './TarjetasSaludo';
import { Nombre } from '../API_Datos_Personales.js'
import { HistorialTarjetas } from '../PrincipalActividad/HistorialTarjetas.js'
import { useContext } from 'react';
import { contextUser } from '../../../context/contextUser';


export function General(){
    const { user } = useContext(contextUser)

    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <Saludo usuario={user} texto="Hola, "/>
                <TrajetasSaludo />
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                <HistorialTarjetas />
                </Movimientos>
            </ContenedorPrincipal>
        </div>


    )
}

