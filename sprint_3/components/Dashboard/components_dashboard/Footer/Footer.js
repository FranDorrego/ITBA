import { ComponenteFooter1 } from './ComponenteFooter1';
import { ComponenteFooter2 } from './ComponenteFooter2';
import { ComponenteFooter3 } from './ComponenteFooter3';
import facebook from '../../../assets-globales/assets/facebook.png'
import twitter from '../../../assets-globales/assets/x.png'
import instagram from '../../../assets-globales/assets/instagram.png'

export function Footer(){
    return(
        <footer>
            <ComponenteFooter1 text1="Sucursales" text2="Acerca de ITBANK" link1={""} link2={""}/>
            <ComponenteFooter2 text1="© ITBAN Argentina S.A" text2="Centro de Atención al Cliente 0810-777-4444" link1={""} link2={""}/>
            {/* ESTO SE PUEDE HACER MUCHOOOO MEJOR, SEPRANDO EL CONTENDO, CREANDO UN CONTENEDOR PRINCIPAL PARA EL FOOTER DE SOCIALES Y CON 3 COMPONETES SEPARADAS, 
            POR AHORA LO DEJO ASI */}
            <ComponenteFooter3
                logo1={facebook} link1="https://www.facebook.com/" alt1="logo-facebook"
                logo2={twitter} link2="https://www.twitter.com/" al2="logo-twitter"
                logo3={instagram} link3="https://www.instagram.com/" alt3="logo-instagram"
                />
        </footer>
    )
}