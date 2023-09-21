import { Buscador } from "../ContenidoPrincipal/Buscador"
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal"
import { FormPrestamos } from "./FormPrestamos"
import { SimuladorPrestamo } from "./SimuladorPrestamo"
import estilosPantilla from '../../../assets-globales/stylePlantilla.module.css'


export function GeneralFormPrestamos(){
    return(
        <div className={estilosPantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <FormPrestamos />
            </ContenedorPrincipal>
        </div>
    )
}