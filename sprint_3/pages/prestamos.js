
import { MenuIzquierdo } from '@/components/Dashboard/components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '@/components/Dashboard/components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '@/components/Dashboard/components_dashboard/Footer/Footer';

import estilosPantilla from '../styles/stylePlantilla.module.css'

import { GeneralPrestamos } from '../components/Dashboard/components_dashboard/PrincipalPrestamos/GeneralPrestamos';


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