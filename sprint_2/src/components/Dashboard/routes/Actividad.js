import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';
import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';
import { Footer } from '../components_dashboard/Footer/Footer';
import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'
import { ContenidoActividad } from '../components_dashboard/Actividad/ContenidoActividad';


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