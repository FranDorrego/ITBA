
import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components_dashboard/Footer/Footer';

import { General } from '../components_dashboard/Principal/General';



import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'
import { FormPrestamos } from '../components_dashboard/PrincipalFormPrestamos/FormPrestamos';
import { SimuladorPrestamo } from '../components_dashboard/PrincipalFormPrestamos/SimuladorPrestamo';
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