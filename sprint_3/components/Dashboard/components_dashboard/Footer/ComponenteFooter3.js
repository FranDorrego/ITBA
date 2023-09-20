import { Link } from "react-router-dom";
import estilosPantilla from '../../../assets-globales/stylePlantilla.module.css'

export function ComponenteFooter3({logo1, link1, alt1, logo2, link2, alt2, logo3, link3, alt3,}){
    return(
        <div className={estilosPantilla.footerTercerDiv}>
            <h3>Seguinos en :</h3>
            <Link className={estilosPantilla.socialFooter} href={ link1 } target="_blank">
                <img src={logo1} alt={alt1}/>
            </Link>
            <Link className={estilosPantilla.socialFooter} href={ link2 } target="_blank">
                <img src={logo2} alt={alt2}/>
            </Link>
            <Link className={estilosPantilla.socialFooter} href={ link3 } target="_blank">
                <img src={logo3} alt={alt3}/>
            </Link>
       </div>
    )
}