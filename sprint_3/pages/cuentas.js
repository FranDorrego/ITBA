
import { MenuIzquierdo } from '@/components/Dashboard/components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '@/components/Dashboard/components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '@/components/Dashboard/components_dashboard/Footer/Footer';

import CuentasPrincipal from '@/components/Dashboard/components_dashboard/PrincipalCuentas/GeneralCuentas';

import estilosPantilla from '@/styles/stylePlantilla.module.css'


function Cuentas(){
    return(
        <div className={ estilosPantilla.gridDashboard }> 
            <MenuIzquierdo />
            <CuentasPrincipal/>
            <MenuDerecho />
            <Footer />


        </div>
    )
}

export default Cuentas;