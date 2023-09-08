import { Link } from "react-router-dom";
import etilosDashboard from '../../styleDashboard.module.css'
import estilosPantilla from '../../../assets-globales/stylePlantilla.module.css'


export function ComponenteFooter1({text1, text2, link1, link2}){
    return(
        <div className={estilosPantilla.footerPrimerDiv}>
            <Link className={estilosPantilla.footerTexto} to={link1}> {text1} </Link>
            <Link className={estilosPantilla.footerTexto} href={link2}> {text2} </Link>
        </div>
    )
}