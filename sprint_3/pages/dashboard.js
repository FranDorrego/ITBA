
import { MenuIzquierdo } from '../components/Dashboard/components_dashboard/MenuIzquierdo/MenuIzquierdo';

import { MenuDerecho } from '../components/Dashboard/components_dashboard/MenuDerecho/MenuDerecho';

import { Footer } from '../components/Dashboard/components_dashboard/Footer/Footer';

import { General } from '../components/Dashboard/components_dashboard/Principal/General';

import estilosPlantilla from '@/styles/stylePlantilla.module.css'


function dashboard(){
    return(
            <div className={ estilosPlantilla.gridDashboard }> 
                <MenuIzquierdo />
                <General />
                <MenuDerecho />
                <Footer />
            </div>
    )
}

export default dashboard;