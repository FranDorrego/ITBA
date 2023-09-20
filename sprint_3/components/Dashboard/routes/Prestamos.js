
import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components_dashboard/Footer/Footer';

import { General } from '../components_dashboard/Principal/General';



import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'
import { GeneralPrestamos } from '../components_dashboard/PrincipalPrestamos/GeneralPrestamos';


function Prestamos(){
    return(
        <div className={ estilosPantilla.gridDashboard }> 
            <MenuIzquierdo/>
            <GeneralPrestamos />
            <MenuDerecho />
            <Footer />


        </div>
    )
}

export default Prestamos;