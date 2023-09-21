import React from 'react';

import { MenuIzquierdo } from '../components/Dashboard/components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components/Dashboard/components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components/Dashboard/components_dashboard/Footer/Footer';

import DivContenedorPrincipal  from '@/components/dashboard/components_dashboard/PrincipalTransferencias/GeneralTransferencias';

import estilosPantilla from '@/styles/stylePlantilla.module.css'


function Transferencias(){
    return(
        <div className={ estilosPantilla.gridDashboard }> 
            <MenuIzquierdo />
            <DivContenedorPrincipal/>
            <MenuDerecho />
            <Footer />


        </div>
    )
}

export default Transferencias;