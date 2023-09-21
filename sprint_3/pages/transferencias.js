import React from 'react';

import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components_dashboard/Footer/Footer';

import { General } from '../components_dashboard/Principal/General';

import DivContenedorPrincipal  from '../components_dashboard/PrincipalTransferencias/GeneralTransferencias';


import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'


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