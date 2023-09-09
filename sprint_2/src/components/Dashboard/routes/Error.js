
import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components_dashboard/Footer/Footer';

import estilosPantilla from '../../assets-globales/stylePlantilla.module.css'


function Transferencias(){
    return(
        <div className={ estilosPantilla.gridDashboard }> 
            <MenuIzquierdo />
            
                <h1>ERROR 404 (FALTA HACER)</h1>
            <MenuDerecho />
            <Footer />
        </div>
    )
}

export default Transferencias;