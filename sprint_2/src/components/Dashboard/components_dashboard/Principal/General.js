import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'
import { Buscador } from './Buscador';
import { ContenedorPrincipal } from './ContenedorPrincipal';
import { Saludo } from './Saludo';
import { Movimientos } from './Movimientos';
import { TrajetasSaludo } from './TarjetasSaludo';
import { Nombre } from '../API_Datos_Personales.js'
import { HistorialTarjetas } from '../PrincipalActividad/HistorialTarjetas.js'

export function General(){
    let Datos = Nombre();
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <Saludo usuario={Datos.NombreBase} texto="Hola, "/>
                <TrajetasSaludo />
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                <HistorialTarjetas />
                </Movimientos>
            </ContenedorPrincipal>
        </div>
    )
}

