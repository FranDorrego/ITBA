
import { MenuIzquierdo } from '../components/Dashboard/components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components/Dashboard/components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components/Dashboard/components_dashboard/Footer/Footer';

import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'

import { GeneralFormPrestamos } from '../components_dashboard/PrincipalFormPrestamos/GeneralFormPrestamos';


function FormularioPrestamos(){
    return(
        <div className={ estilosPantilla.gridDashboard }> 
            <MenuIzquierdo />
            <GeneralFormPrestamos/>
            <MenuDerecho />
            <Footer />
        </div>
    )
}

export default FormularioPrestamos;