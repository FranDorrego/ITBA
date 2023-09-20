
import { MenuIzquierdo } from '@/components/Dashboard/components_dashboard/MenuIzquierdo/MenuIzquierdo';
import { MenuDerecho } from '@/components/Dashboard/components_dashboard/MenuDerecho/MenuDerecho';
import { Footer } from '@/components/Dashboard/components_dashboard/Footer/Footer';
import estilosPantilla from '@/styles/stylePlantilla.module.css'
import { GeneralCambioDivisa } from '@/components/Dashboard/components_dashboard/PrincipalCambioDivisas/GeneralCambioDivisa';


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