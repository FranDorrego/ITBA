
import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';
import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';
import { Footer } from '../components_dashboard/Footer/Footer';
import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'
import { GeneralCambioDivisa } from '../components_dashboard/PrincipalCambioDivisas/GeneralCambioDivisa';


function CambioDivisas(){
    return(
        <div className={ estilosPantilla.gridDashboard }> 
            <MenuIzquierdo />
            <GeneralCambioDivisa />
            <MenuDerecho />
            <Footer />


        </div>
    )
}

export default CambioDivisas;