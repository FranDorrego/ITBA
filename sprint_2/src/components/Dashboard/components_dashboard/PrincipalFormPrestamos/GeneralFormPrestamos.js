import { Buscador } from "../Principal/Buscador"
import { ContenedorPrincipal } from "../Principal/ContenedorPrincipal"
import { FormPrestamos } from "./FormPrestamos"
import { SimuladorPrestamo } from "./SimuladorPrestamo"
import estilosPantilla from '../../../assets-globales/stylePlantilla.module.css'


export function GeneralFormPrestamos(){
    return(
        <div className={estilosPantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <FormPrestamos />
                <SimuladorPrestamo />
            </ContenedorPrincipal>
        </div>
    )
}