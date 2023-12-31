
import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components_dashboard/Footer/Footer';

import { General } from '../components_dashboard/Principal/General';

import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'


function Index(){
    return(
            <div className={ estilosPantilla.gridDashboard }> 
                <MenuIzquierdo />
                <General />
                <MenuDerecho />
                <Footer />
            </div>
    )
}

export default Index;