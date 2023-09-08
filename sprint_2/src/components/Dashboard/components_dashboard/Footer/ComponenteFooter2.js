import { Link } from "react-router-dom";
import estilosPantilla from '../../../assets-globales/stylePlantilla.module.css'

export function ComponenteFooter2({text1, text2, link1, link2}){
    return(
        <div className={estilosPantilla.footerSegundoDiv}>
            <Link className={estilosPantilla.footerTexto} href={ link1 }> { text1 } </Link>
            <Link className={estilosPantilla.footerTexto} href={ link2 }> { text2 } </Link>
       </div>
    )
}