import React from 'react';

import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components_dashboard/Footer/Footer';

import { General } from '../components_dashboard/Principal/General';

import CuentasPrincipal  from '../components_dashboard/PrincipalCuentas/GeneralCuentas';


import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'


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