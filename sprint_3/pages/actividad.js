import { MenuIzquierdo } from '../components/Dashboard/components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components/Dashboard/components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components/Dashboard/components_dashboard/Footer/Footer';

import estilosPantilla from '@/styles/stylePlantilla.module.css'

import { ContenidoActividad } from '../components/Dashboard/components_dashboard/PrincipalActividad/ContenidoActividad';


function Actividad(){
    return(
        <div className={ estilosPantilla.gridDashboard }> 
            <MenuIzquierdo />
            <ContenidoActividad />
            <MenuDerecho />
            <Footer />
        </div>
    )
}

export default Actividad;