import '../style_dashboard.css'
import '../../assets-globales/style-plantilla.css'
import { Titulo } from '../components_dashboard/Titulo';
import { BotonesIzquierdos } from '../components_dashboard/MenuIzquierdo/BotonesIzquierdos'
import { MenuIzquierdo } from '../components_dashboard/MenuIzquierdo/MenuIzquierdo';
import { BotonIzquierdo } from '../components_dashboard/MenuIzquierdo/BotonIzquierdo';
import home from '../../assets-globales/assets/home.svg'
import actividad from '../../assets-globales/assets/circle-dollar.svg'
import banco from '../../assets-globales/assets/bank.svg'
import tarjetaDivisas from '../../assets-globales/assets/tarjeta.svg'
import { BotonesFinalMenuIzquierdo } from '../components_dashboard/MenuIzquierdo/BotonesFinalMenuIzquierdo';
import ayuda from '../../assets-globales/assets/ayuda.svg'
import cerrarSesion from '../../assets-globales/assets/cerrar_sesion.svg'
import { MenuDerecho } from '../components_dashboard/MenuDerecho/MenuDerecho';
import { SpanDerecho } from '../components_dashboard/MenuDerecho/SpanDerecho';
import { ElementosMenuDercho } from '../components_dashboard/MenuDerecho/ElementosMenuDerecho';
import { BotonDerecho } from '../components_dashboard/MenuDerecho/BotonDerecho';
import cbu from '../../assets-globales/assets/CIRCLE-INFO.svg'
import prestamos from '../../assets-globales/assets/circle-arrow-down-deposito.svg'
import transferencias from '../../assets-globales/assets/transferencias.svg'
import { Tarjeta } from '../components_dashboard/MenuDerecho/Tarjeta';
import { Footer } from '../components_dashboard/Footer/Footer';
import { ComponenteFooter1 } from '../components_dashboard/Footer/ComponenteFooter1';
import { ComponenteFooter2 } from '../components_dashboard/Footer/ComponenteFooter2';
import { ComponenteFooter3 } from '../components_dashboard/Footer/ComponenteFooter3';
import facebook from '../../assets-globales/assets/facebook.png'
import twitter from '../../assets-globales/assets/x.png'
import instagram from '../../assets-globales/assets/instagram.png'


function Index(){
    return(
        <div> 
            {/* MENU IZQUIERDO */}
            <MenuIzquierdo>
                <Titulo/>
                <BotonesIzquierdos>
                    <BotonIzquierdo text="Inicio" imagen={home} alt="inicio" customClass="boton-selecionado"/>
                    <BotonIzquierdo text="Actividad" imagen={actividad} alt="actividad" />
                    <BotonIzquierdo text="Cuentas" imagen={banco} alt="cuentas" />
                    <BotonIzquierdo text="Cambio de divisas" imagen={tarjetaDivisas} alt="cambio_divisas" />
                </BotonesIzquierdos>
                <BotonesFinalMenuIzquierdo>
                    <BotonIzquierdo text="Ayuda" imagen={ayuda} alt="ayuda"/>
                    <BotonIzquierdo text="Cerrar sesión" imagen={cerrarSesion} alt="cerrarSesion" link="/login"/>
                </BotonesFinalMenuIzquierdo>
            </MenuIzquierdo>

            {/* MENU DERECHO */}
            <MenuDerecho>
                <SpanDerecho/>
                <ElementosMenuDercho>
                    <h1 className='titulo'>Acciones rápidas</h1>
                    <BotonDerecho text="Mi CBU" imagen={cbu}/>
                    <BotonDerecho text="Prestamos" imagen={prestamos}/>
                    <BotonDerecho text="Transferencias" imagen={transferencias}/>
                    <Tarjeta />
                </ElementosMenuDercho>
            </MenuDerecho> 
            {/* FOOTER */}
            <Footer>
                <ComponenteFooter1 text1="Sucursales" text2="Acerca de ITBANK" link1={""} link2={""}/>
                <ComponenteFooter2 text1="© ITBAN Argentina S.A" text2="Centro de Atención al Cliente 0810-777-4444" link1={""} link2={""}/>
                 {/* ESTO SE PUEDE HACER MUCHOOOO MEJOR, SEPRANDO EL CONTENDO, CREANDO UN CONTENEDOR PRINCIPAL PARA EL FOOTER DE SOCIALES Y CON 3 COMPONETES SEPARADAS, POR AHORA LO DEJO ASI */}
                <ComponenteFooter3
                    logo1={facebook} link1="https://www.facebook.com/" alt1="logo-facebook"
                    logo2={twitter} link2="https://www.twitter.com/" al2="logo-twitter"
                    logo3={instagram} link3="https://www.instagram.com/" alt3="logo-instagram"
                    />
            </Footer>
        </div>
    )
}

export default Index;