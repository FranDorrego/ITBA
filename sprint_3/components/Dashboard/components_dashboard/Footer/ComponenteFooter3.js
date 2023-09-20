import Link from 'next/link'
import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import Image from 'next/image'


export function ComponenteFooter3({logo1, link1, alt1, logo2, link2, alt2, logo3, link3, alt3,}){
    return(
        <div className={estilosPlantilla.footerTercerDiv}>
            <h3>Seguinos en :</h3>
            <Link className={estilosPlantilla.socialFooter} href={ link1 } target="_blank">
                <img src={logo1} alt={alt1}/>
            </Link>
            <Link className={estilosPlantilla.socialFooter} href={ link2 } target="_blank">
                <img src={logo2} alt={alt2}/>
            </Link>
            <Link className={estilosPlantilla.socialFooter} href={ link3 } target="_blank">
                <img src={logo3} alt={alt3}/>
            </Link>
       </div>
    )
}